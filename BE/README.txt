Please make sure to copy and paste the following into your Global.asax:

//This line will enable session id generation on ASP.NET Requests.
public void Session_OnStart() { }
//This line allows us to access session variables in a read-only format in the webapi controllers.
public void Application_PostAuthorizeRequest() { System.Web.HttpContext.Current.SetSessionStateBehavior(System.Web.SessionState.SessionStateBehavior.ReadOnly); }

====================

Also make sure to call SMC.XTier.VHR.BE.XTierConfig.Initialize() from your UnityConfig.cs.