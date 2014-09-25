<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Kayla Griffin</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Place favicon.ico and apple-touch-icon(s) in the root directory -->
        <link rel="shortcut icon" href="assets/img/fav-icon.png">
        <link rel="stylesheet" href="assets/css/styles.min.css">
        <link href='http://fonts.googleapis.com/css?family=Libre+Baskerville:400,700,400italic' rel='stylesheet' type='text/css'>
        <script src="assets/js/main.min.js"></script>

    </head>
    <body>
        <!--[if lt IE 8]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->

        <div id="nav-icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>

        <aside>
            

            <nav>

                <img src="assets/img/logo.png" alt="" id="nav-logo">
                <h1>kayla griffin</h1>
                <h2>designer &middot; thinker &middot; happy person</h2>    

                <ul class="top">
                    <li><a href="index.php?page=work">work</a></li>
                </ul>

                <ul class="work">
<!--                     <li><a href="index.php?page=canopy">canopy</a></li> -->
                    <li><a href="index.php?page=stomping-grounds">stomping grounds</a></li>
                    <li><a href="index.php?page=render">render</a></li>
                    <li><a href="index.php?page=prepped">prepped</a></li>
                    <li><a href="index.php?page=marsh-monster">marsh monster</a></li>
                    <li><a href="index.php?page=zest-magazine">zest magazine</a></li>
                    <li><a href="index.php?page=web">web</a></li>
                    <li><a href="index.php?page=book">book covers</a></li>
                    <li><a href="index.php?page=packaging">packaging</a></li>
<!--                     <li><a href="index.php?page=campaigns">campaigns</a></li>
                    <li><a href="index.php?page=logos">logos</a></li>
                    <li><a href="index.php?page=extra">a little extra</a></li> -->
                </ul>

                <ul class="main">
                    <li><a href="index.php?page=about">about</a></li>
                    <li><a href="index.php?page=resume">resume</a></li>
                </ul>
                
                <div class="info-box">
                    <a href="mailto:kaylagriffin1@gmail.com" class="info">kaylagriffin1@gmail.com</a><br/>
                    <span class="info">772-486-7551</span>

                    <div class="social-wrap">
                        
                        <div class="social-icon"><a href="http://www.linkedin.com/pub/kayla-griffin/18/ba1/755" target="_blank"><i class="icon-linkedin"></i></a></div>
                        <div class="social-icon"><a href="http://www.pinterest.com/kaylaagriffin/" target="_blank"><i class="icon-pinterest"></i></a></div>
                        <div class="social-icon"><a href="http://www.enjoygram.com/kaygriffin1" target="_blank"><i class="icon-instagram"></i></a></div>

                    </div>

                </div>
                

            </nav>


        </aside>

        <section class="mobile-splash">
            <img src="assets/img/logo.png" alt="Kayla Griffin" />
            <h1 class="mobile">kayla griffin</h1>
            <h2 class="mobile">designer &middot; thinker &middot; happy person</h2>  
        </section>

        <section id="frame">
            
            <?php 
            $filename = 'includes/'; // . page . '.php'
            $fourohfour = $filename . '404.php';
            $home_page = $filename . 'work.php';

            if (isset($_GET['page'])) {
                $filename = $filename . $_GET['page'] . '.php';

                if (file_exists($filename)) {
                    $page = $filename;
                } else {
                    $page = $fourohfour;
                }

            } else {
                $page = $home_page;
            }

            include($page); ?>
            
        </section>

        

        <!-- LIVERELOADING FOR GRUNT -->
        <script src="//localhost:35729/livereload.js"></script>
        <!-- REMOVE FOR PRODUCTION -->

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <!-- <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X');ga('send','pageview');
        </script> -->
    </body>
</html>
