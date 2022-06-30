using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Web.Resource;

namespace EmployeeManagementWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [RequiredScope(RequiredScopesConfigurationKey = "AzureAd:scopes")]
    public class EmployeesController : ControllerBase
    {
        private static readonly string[] Employees = new[] { "Anna Williams", "Nina Williams", "Paul Phoenix", "Eddy Gordo" };
        [Authorize(Roles = "Admin")]
        public IActionResult GetEmployees()
        {
            return Ok(Employees);
        }

        [Authorize]
        [HttpGet("total-employees")]
        public IActionResult TotalEmployees()
        {
            return Ok(Employees.Length);
        }
    }
}
