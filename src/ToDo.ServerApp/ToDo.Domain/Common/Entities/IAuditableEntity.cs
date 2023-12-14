namespace ToDo.Domain.Common.Entities;

internal interface IAuditableEntity : IEntity
{
    DateTimeOffset CreatedTime { get; set; }

    DateTimeOffset? ModifiedTime { get; set; }
}