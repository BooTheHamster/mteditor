using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using mteditor.Hubs;
using mteditor.Models;
using mteditor.Settings;

namespace mteditor.Services
{
    /// <summary>
    /// Сервис редактирования файла.
    /// </summary>
    public class EditFileService
    {
        /// <summary>
        /// Разделитель между частью имени файла и каталогом в файле.
        /// </summary>
        private const char Delimiter = '=';
        private readonly ILogger<EditFileService> _logger;
        private readonly IHubContext<EditFileHub, IEditFileHub> _editFileHub;
        private string _editFilePath;

        public EditFileService(
            IOptionsMonitor<EditFileSettings> editFileSettings,
            ILogger<EditFileService> logger,
            IHubContext<EditFileHub, IEditFileHub> editFileHubClient)
        {
            _logger = logger;
            _editFileHub = editFileHubClient;
            _editFilePath = editFileSettings.CurrentValue.EditFilePath;

            editFileSettings.OnChange(OnEditFileSettings);
        }

        public IEnumerable<EditRecord> GetRecords()
        {
            if (!File.Exists(_editFilePath))
            {
                return Enumerable.Empty<EditRecord>();
            }

            return GetRecordsFromFile();
        }

        private EditRecord ParseLine(string line)
        {
            var parts = line.Split(Delimiter);
            return new EditRecord(parts[0], parts[1]);
        }

        private IEnumerable<EditRecord> GetRecordsFromFile()
        {
            try
            {
                var result = new List<EditRecord>();

                foreach (var line in File.ReadLines(_editFilePath))
                {
                    if (string.IsNullOrWhiteSpace(line))
                    {
                        continue;
                    }

                    var editRecord = ParseLine(line);

                    if (editRecord == null)
                    {
                        continue;
                    }

                    result.Add(editRecord);
                }                

                return result;
            }
            catch (System.Exception error)
            {
                _logger.LogError(error, "Error read file");
                return Enumerable.Empty<EditRecord>();
            }
        }

        private void OnEditFileSettings(EditFileSettings settings, string arg)
        {
            _editFilePath = settings.EditFilePath;
            _editFileHub.Clients.All.ReloadRecords();
        }
    }
}