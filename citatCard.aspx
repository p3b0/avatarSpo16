<%@ Page Language="C#" masterpagefile="~masterurl/custom.master" title="Untitled 1" inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document" %>
<%@ Register tagprefix="SharePoint" namespace="Microsoft.SharePoint.WebControls" assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<asp:Content id="Content2" runat="Server" contentplaceholderid="PlaceHolderAdditionalPageHead">
    <link rel="stylesheet" href="css/custom.css">
</asp:Content>

<asp:Content id="Content1" runat="Server" contentplaceholderid="PlaceHolderMain">
    <div id="citat-card">
		<header>
			<img src="" alt="">
			<h1></h1>
			<h2></h2>
		</header>
		<div id="citat">
			<p></p>
		</div>
	</div>
    <!--Testkommentar-->
    <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
	<script src="js/custom.js"></script>
</asp:Content>
