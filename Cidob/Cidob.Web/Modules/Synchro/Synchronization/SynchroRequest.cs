using System.Collections.Generic;
using Serenity.Services;

namespace Cidob.Modules.Synchro.Synchronization
{
    public class SynchroRequest : ServiceRequest
    {
        public List<int> OrderIDs { get; set; }
    }
}