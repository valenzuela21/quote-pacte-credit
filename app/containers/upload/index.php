<?php
header('Access-Control-Allow-Origin: *');

function generateRandomString($length = 8) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

$ramdon = generateRandomString();

$file_name = $ramdon.'-'.$_FILES['file']['name'];

if (move_uploaded_file($_FILES["file"]["tmp_name"], "../../../assets/upload/".$file_name)) {
    echo json_encode($file_name);
}


