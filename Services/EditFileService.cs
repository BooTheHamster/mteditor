using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using mteditor.Models;
using mteditor.Settings;

namespace mteditor.Services
{
    /// <summary>
    /// Сервис редактирования файла.
    /// </summary>
    public class EditFileService
    {
        private readonly ILogger<EditFileService> _logger;
        private string _editFilePath;

        public EditFileService(IOptionsMonitor<EditFileSettings> editFileSettings, ILogger<EditFileService> logger)
        {
            _logger = logger;
            _editFilePath = editFileSettings.CurrentValue.EditFilePath;

            editFileSettings.OnChange(OnEditFileSettings);
        }

        public IEnumerable<EditRecord> GetRecords()
        {
            return Enumerable.Range(1, 10)
                .Select(i => new EditRecord($"FilenamePart_{i}", $"{_editFilePath}"))
                .ToArray();
        }

        private void OnEditFileSettings(EditFileSettings settings, string arg)
        {
            _editFilePath = settings.EditFilePath;
        }
    }
}