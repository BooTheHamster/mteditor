using System.Threading.Tasks;

namespace mteditor.Hubs
{
    /// <summary>
    /// Хаб SignalR для передачи оповещений на клиент.
    /// </summary>
    public interface IEditFileHub
    {
        /// <summary>
        /// Уведомление клиенту обновить редактируемые записи.
        /// </summary>
        Task ReloadRecords();
    }
}