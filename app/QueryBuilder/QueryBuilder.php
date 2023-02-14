<?php

namespace App\QueryBuilder;

use Illuminate\Database\Eloquent\Collection;

abstract class QueryBuilder
{
    abstract function getAll(): Collection;
}
