using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using mteditor.Models;

namespace mteditor.Services
{
    /// <summary>
    /// Сервис редактирования файла.
    /// </summary>
    public class EditFileService
    {
        private readonly IConfiguration configuration;
        private readonly ILogger<EditFileService> logger;
        public EditFileService(IConfiguration configuration, ILogger<EditFileService> logger)
        {
            this.logger = logger;
            this.configuration = configuration;
        }

        public IEnumerable<EditRecord> GetRecords()
        {
            return Enumerable.Range(1, 10)
                .Select(i => new EditRecord($"FilenamePart_{i}", $"FolderName_{i}"))
                .ToArray();
        }
    }
}