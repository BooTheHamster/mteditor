using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using mteditor.Models;

namespace mteditor.Controllers
{
    [ApiController]
    [Route("edit")]
    public class EditFileController : ControllerBase
    {
        private readonly ILogger<EditFileController> _logger;
        private readonly Services.EditFileService _editFileService;

        public EditFileController(
            ILogger<EditFileController> logger,
            Services.EditFileService editFileService)
        {
            _editFileService = editFileService;
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<EditRecord> Get()
        {
            return _editFileService.GetRecords();
        }
    }
}
