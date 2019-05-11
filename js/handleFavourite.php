<?php
    if (isset($_server['HTTP_X_REQUESTED_WITH']) && $_SERVER
    ['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest'){
        echo 'yes this is an Ajax req';

    }
?>