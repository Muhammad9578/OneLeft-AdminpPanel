<?php 
    session_start();
    if ($_SESSION['username']!="support@quizapp.com" || $_SESSION['password']!="8546002fc6ad4b87bd61e3d66c86126c") {
        unset($_SESSION['username']);
        unset($_SESSION['password']);
        $_SESSION['w_msg'] = "Please Login First!";
        header("location:../");
    }
 ?>
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Quiz App | Categories List</title>

    <!-- Custom fonts for this template-->
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="css/sb-admin-2.min.css" rel="stylesheet">

</head>

<body id="page-top">

    <!-- Page Wrapper -->
    <div id="wrapper">

        <!-- Sidebar -->
        <?php 
       include ("navbar.php");
       ?>
                <!-- End of Topbar -->

                <!-- Begin Page Content -->
                <div class="container-fluid">

                    <!-- Page Heading -->
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Categories List</h1>
                        
                    </div>

                    <div class="container-fluid">

                    <!-- Page Heading -->

                    <!-- DataTales Example -->
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Category List </h6>
                        </div>
                        <div class="card-body">
                            <h5 id="msgmaindel" style="margin-top: 5px; margin-bottom: 5px;" align="center"></h5>
                            <div class="table-responsive" id="listtab">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Sr#</th>
                                            <!-- <th>ID</th> -->
                                            <th>Category Name</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody id="reviews">
                                    </tbody>
                                </table>
                            </div>

                            <div class="table-responsive" id="edittab" style="display: none; width: 70%;">
                                <h5 id="msgmain" align="center"></h5>
                                        <table class="table table-borderless">
                                            <tr>
                                                <th>
                                                    <div class="form-group">
                                                        <label>Category Name <span style="color:red;" id="msgcategory">*</span></label>
                                                        <input type="text" class="form-control bg-light text-dark small" name="categoryname" id="categoryname">
                                                        <input type="hidden" class="form-control bg-light text-dark small" name="categorynameold" id="categorynameold">
                                                        <input type="hidden" value="0" id="editval">
                                                    </div>
                                                </th>
                                            </tr>

                                            <tr>
                                                <th>
                                                    <div class="form-group">
                                                        <center><button onclick="editcate()" style="width: 50%;" class="btn btn-warning">Edit | Update Category</button> <button onclick='$("#listtab").css("display","block");
    $("#edittab").css("display","none");' style=" float: right;" class="btn btn-danger btn-sm">Cancel</button> </center>
                                                    </div>
                                                </th>
                                            </tr>
                                        </table>
                                    </div>
                        </div>
                    </div>

                </div>

                </div>
                <!-- /.container-fluid -->

            </div>
            <!-- End of Main Content -->

            <!-- Footer -->
            <?php require_once 'footer.php'; ?>
            <!-- End of Footer -->

        </div>
        <!-- End of Content Wrapper -->

    </div>
    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

    <script src="https://www.gstatic.com/firebasejs/live/3.0/firebase.js"></script>
      <script src="main.js"></script>
      <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
      <script type="text/javascript">
          window.onload=loadList;
      </script>
    <!-- Bootstrap core JavaScript-->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Core plugin JavaScript-->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Custom scripts for all pages-->
    <script src="js/sb-admin-2.min.js"></script>

</body>

</html>