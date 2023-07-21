<?php

/*
Plugin Name: Cut-Up Machine
Plugin URI: https://www.languageisavirus.com/cutupmachine.php
Description: Mixes up the words you enter, a la William S. Burroughs
Author: Lake
Version: 2
Author URI: https://www.languageisavirus.com/
License: GPL3
Contact: webmaster@languageisavirus.com
Copyright 2014  (email : webmaster@languageisavirus.com)
*/

defined('ABSPATH') or die("No script kiddies please!");

class CutUpMachine extends WP_Widget
{

  function __construct()
  {
	$widget_ops = array('classname' => 'CutUpMachine', 'description' => 'Mixes up the words you enter, a la William S. Burroughs' );
	parent::__construct('CutUpMachine', 'Cut-Up Machine', $widget_ops);
  }
 
  function form($instance)
  {
	$instance = wp_parse_args( (array) $instance, array( 'title' => '' ) );
	$title = $instance['title'];
?>
  <p><label for="<?php echo $this->get_field_id('title'); ?>">Title: <input class="widefat" id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title'); ?>" type="text" value="<?php echo attribute_escape($title); ?>" /></label></p>
<?php
  }
 
  function update($new_instance, $old_instance)
  {
	$instance = $old_instance;
	$instance['title'] = $new_instance['title'];
	return $instance;
  }
 
  function widget($args, $instance)
  {
	extract($args, EXTR_SKIP);
 
	echo $before_widget;
	$title = empty($instance['title']) ? ' ' : apply_filters('widget_title', $instance['title']);
 
	if (!empty($title))
	  echo $before_title . $title . $after_title;;

	function getcutupmachine()
	{
		wp_register_script( 'cutupmachine', plugins_url( 'cutupmachine.js' , __FILE__ ), array(), '', true );
		wp_enqueue_script( 'cutupmachine' );
	}

	add_action( 'wp_enqueue_scripts', 'getcutupmachine' );
	
	getcutupmachine();

	echo '
		<div class="cutupmachine">
			<h3 class="widget-title"><span>Cut-Up Machine</span></h3>
			<ul>
				<li>1. Type or paste some text into the field below.</li>
				<li>2. Click "Cut It Up".</li><li>3. Your text is mixed up a la Burroughs!</li>
			</ul>
			<form>
				<label for="text_in" class="textarea-label">Enter Text:</label><br />
				<textarea id="text_in" name="text_in" aria-label="Enter Text" rows="5" cols="50"></textarea><br />
				<button type="button" aria-label="Cut It Up" class="button-big" onClick="cut_it_up()">Cut It Up</button><br />
				<label for="text_out" class="textarea-label">Cut Up Text:</label><br />
				<textarea id="text_out" name="text_out" aria-label="Cut Up Text" rows="5" cols="50"></textarea>
			</form>
		</div>
	';

	echo $after_widget;
  }
 
}

add_action( 'widgets_init', function(){
	register_widget( 'CutUpMachine' );
}); 
?>
