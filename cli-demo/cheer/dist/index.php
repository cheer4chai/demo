<?php
namespace molecules\cheer;
use \RenderEngine;
class CheerController {
    public static $engineType = "smarty";
    private $engine;
    function __construct($engine) {
        $this->engine = $engine;
    }
    function parse(&$data) {
        $a = $data["a"]; $b = $data["b"];
        $a = "this is a molecule module";
        $b = "hello Molecule";
        return array( "a" => $a, "b" => $b );
    }
    function render(&$data) {
        $tplData = $this->parse($data);
        return $this->engine->render("view/index.tpl", $tplData);
    }
}
