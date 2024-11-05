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

    <title>Quiz App | Add MCQ</title>

    <!-- Custom fonts for this template-->
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="css/sb-admin-2.min.css" rel="stylesheet">
    <style type="text/css">
        span{
            font-size: 12px;
        }
        label{
            font-size: 12px;
        }
    </style>
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
                        <h1 class="h3 mb-0 text-gray-800">Add MCQS</h1>
                        
                    </div>

                    <div class="row">

                        <!-- Content Column -->
                        <div class="col-lg-11 mb-4">

                            <!-- Project Card Example -->
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Add MCQS</h6>
                                    <h4 align="center" style="margin-top: 10px; border-top: 10px;" id="msgmain"></h4>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-borderless">
                                            <tr>
                                                <th>
                                                    <div class="form-group">
                                                        <label>Choose Category <span style="color:red;" id="msgcategory">*</span></label>
                                                        <select class="form-control" id="categoryop">
                                                        </select>
                                                    </div>
                                                </th>
                                                <th>
                                                    <div class="form-group">
                                                        <label>Question <span style="color:red;" id="msgquestion">*</span></label>
                                                        <input type="text" placeholder="Enter Question" class="form-control" id="question">
                                                    </div>
                                                </th>
                                                <th>
                                                    <div class="form-group">
                                                        <label>Correct Option / Answer <span style="color:red;" id="msgcorrectans">*</span></label>
                                                        <select class="form-control" id="correctans">
                                                        <option value="">--SELECT OPTION--</option>
                                                        <option value="option1">Option 1</option>
                                                        <option value="option2">Option 2</option>   
                                                        <option value="option3">Option 3</option>
                                                        <option value="option4">Option 4</option>
                                                        </select>
                                                    </div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th width="50%">
                                                    <div class="form-group">
                                                        <label>Option 1 <span style="color:red;" id="msgans1">*</span></label>
                                                        <input type="text" placeholder="Option 1 / Answer" class="form-control" id="ans1">
                                                    </div>
                                                </th>
                                                <th colspan="2" width="50%">
                                                    <div class="form-group">
                                                        <label>Option 2 <span style="color:red;" id="msgans2">*</span></label>
                                                        <input type="text" placeholder="Option 2 / Answer" class="form-control" id="ans2">
                                                    </div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th width="50%">
                                                    <div class="form-group">
                                                        <label>Option 3 <span style="color:red;" id="msgans3">*</span></label>
                                                        <input type="text" placeholder="Option 3 / Answer" class="form-control" id="ans3">
                                                    </div>
                                                </th>
                                                <th colspan="2" width="50%">
                                                    <div class="form-group">
                                                        <label>Option 4 <span style="color:red;" id="msgans4">*</span></label>
                                                        <input type="text" placeholder="Option 4 / Answer" class="form-control" id="ans4">
                                                    </div>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th colspan="3">
                                                    <div class="form-group">
                                                        <center><button onclick="addmcq()" style="width: 80%;" class="btn btn-primary">Add MCQ</button></center>
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
    <script type="text/javascript">
        window.onload = loadCategory;
    </script>

</body>

</html>