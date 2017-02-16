<%@ Page Language="C#" masterpagefile="~masterurl/custom.master" title="Untitled 1" inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document" %>
<%@ Register tagprefix="SharePoint" namespace="Microsoft.SharePoint.WebControls" assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<asp:Content id="Content2" runat="Server" contentplaceholderid="PlaceHolderAdditionalPageHead">
	<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="css/custom.css">
</asp:Content>

<asp:Content id="Content1" runat="Server" contentplaceholderid="PlaceHolderMain">
    <div id="citat-card">
		<header>
			<span id="expand" class="glyphicon glyphicon-resize-full" aria-hidden="true"></span>
			<img src="" alt="">
			
			<h1></h1>
			<h2></h2>
		</header>
		<div id="citat">
			<p> </p>
			<span class="hidden"></span>
		</div>
		<hr>
		<div id="admin">
			<div id="controls" class="text-center">
				<button id="editButton" class="btn btn-info">Edit</button>
				<button id="newButton" class="btn btn-warning">Create New</button>
				<button id="deleteItem" class="btn btn-danger">Delete</button>
			</div>
			

			<div id="editItem">
				<h4>Edit User</h4>
				<label for="name">Name</label>
				<input type="text" id="name" required>
				<label for="lastname">Lastname</label>
				<input type="text" id="lastname" required>
				<label for="course">Course</label>
				<input type="text" id="course" required>
				<label for="citat">Citat</label>
				<textarea name="citat" id="citat" cols="39" rows="5" required></textarea>
				<button class="btn btn-success" id="update">Update</button>
			</div>
			<div id="newItem">
				<h4>Create User</h4>
				<span class="hidden userimage"></span>
				<label for="name">Name</label>
				<input type="text" id="name" required>
				<label for="lastname">Lastname</label>
				<input type="text" id="lastname" required>
				<label for="course">Course</label>
				<input type="text" id="course" required>
				<label for="email">Email</label>
				<input type="email" id="email" required>
				<label for="citat">Citat</label>
				<textarea name="citat" id="citat" cols="39" rows="5"></textarea>
				<label for="image">Image</label>
				<input type="file" id="image" name="image">
				<button class="btn btn-success" id="create">Create</button>
			</div>
		</div>
		
	</div>

    <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
	<script src="js/custom.js"></script>
</asp:Content>
