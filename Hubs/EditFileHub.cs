using Microsoft.AspNetCore.SignalR;

namespace mteditor.Hubs
{
    /// <summary>
    /// Хаб SignalR для передачи оповещений на клиент.
    /// </summary>
    public class EditFileHub : Hub<IEditFileHub> 
    {
    }
}