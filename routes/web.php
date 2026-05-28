<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WebSiteController;

Route::get('/', [WebSiteController::class, 'index']);
