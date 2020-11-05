namespace mteditor.Models
{
    /// <summary>
    /// Редактируемая запись.
    /// </summary>
    public class EditRecord
    {
        public EditRecord()
        {

        }

        public EditRecord(string filenamePart, string folderName)
        {
            FilenamePart = filenamePart;
            FolderName = folderName;

        }

        /// <summary>
        /// Часть имени файла.
        /// </summary>
        public string FilenamePart { get; set; }

        /// <summary>
        /// Наименование каталога соответствующее части имени файла.
        /// </summary>
        public string FolderName { get; set; }
    }
}