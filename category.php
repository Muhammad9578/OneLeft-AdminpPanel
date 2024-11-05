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

    <title>Quiz App | Add Category</title>

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
                        <h1 class="h3 mb-0 text-gray-800">Add Category</h1>
                        
                    </div>

                    <div class="row">

                        <!-- Content Column -->
                        <div class="col-lg-10 mb-4">

                            <!-- Project Card Example -->
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Add Category</h6>
                                    <h4 align="center" style="margin-top: 10px; border-top: 10px;" id="msgmain"></h4>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-borderless">
                                            <tr>
                                                <th>
                                                    <div class="form-group">
                                                        <label>Category Name <span style="color:red;" id="msgcategory">*</span></label>
                                                        <input type="text" class="form-control bg-light text-dark small" name="categoryname" id="categoryname">
                                                        <input type="hidden" value="<?php echo uniqid().time(); ?>" id="pushi" name="">
                                                    </div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div class="form-group">
                                                        <center><button onclick="addcate()" style="width: 50%;" class="btn btn-info">Add Category</button></center>
                                                    </div>
                                                </th>
                                            </tr>
                                        </table>
                                    </div>

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
      
    <!-- Bootstrap core JavaScript-->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Core plugin JavaScript-->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Custom scripts for all pages-->
    <script src="js/sb-admin-2.min.js"></script>

</body>

</html>