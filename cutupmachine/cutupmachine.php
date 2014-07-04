<?php

/*
Plugin Name: CutUp Machine
Plugin URI: http://www.languageisavirus.com/cutupmachine.html
Description: Mixes up the words you enter, a la William S. Burroughs
Author: Lake e Lou
Version: 1
Author URI: http://www.languageisavirus.com/
License: GPL2

  Copyright 2014  Lake e Lou  (email : webmaster@languageisavirus.com)

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License, version 2, as 
    published by the Free Software Foundation.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

defined('ABSPATH') or die("No script kiddies please!");

class CutUpMachine extends WP_Widget
{
  function CutUpMachine()
  {
    $widget_ops = array('classname' => 'CutUpMachine', 'description' => 'Mixes up the words you enter, a la William S. Burroughs' );
    $this->WP_Widget('CutUpMachine', 'CutUp Machine', $widget_ops);
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
 
    // WIDGET CODE GOES HERE
    echo "<script src=http://www.languageisavirus.com/cutupmachine.js></script>";
    echo "<h3 class='widget-title'><span>CutUp Machine</span></h3>";
    echo "<ul><li>1. Type or paste some text into the field below.</li><li>2. Click Cut It Up.</li><li>3. Your text is mixed up a la Burroughs!</li></ul><form name='Tree'><input type='hidden' name='numPerLine' value='5'><textarea name='UserText' wrap='soft'></textarea><input type='button' value='Cut it Up!' name='Go' onClick='javascript:runlines();'><br /><a href='http://www.languageisavirus.com' target='_blank' style='font-family:ms sans serif;font-size:10px;'>LanguageIsAVirus.com</a></form>";

    echo $after_widget;
  }
 
}
add_action( 'widgets_init', create_function('', 'return register_widget("CutUpMachine");') );?>
