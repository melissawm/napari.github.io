(napari-preferences)=

# Preferences

Starting with version 0.4.6, napari provides persistent settings.

Settings are managed by getting the global settings object:

```python
from napari.settings import get_settings

settings = get_settings()
# then modify... e.g:
settings.appearance.theme = 'dark'
```

## Sections

The settings are grouped by sections and napari core provides the following:

### APPLICATION

Main application settings.


#### Brush size on mouse move modifiers

*Modifiers to activate changing the brush size by moving the mouse.*

* <small>Access programmatically with `SETTINGS.application.brush_size_on_mouse_move_modifiers`.</small>
* <small>Type: `BrushSizeOnMouseModifiers`.</small>
* <small>Default: `<BrushSizeOnMouseModifiers.ALT: 'Alt'>`.</small>
* <small>UI: This setting can be configured via the preferences dialog.</small>
#### Confirm window or application closing

*Ask for confirmation before closing a napari window or application (all napari windows).*

* <small>Access programmatically with `SETTINGS.application.confirm_close_window`.</small>
* <small>Type: `bool`.</small>
* <small>Default: `True`.</small>
* <small>UI: This setting can be configured via the preferences dialog.</small>
#### Console notification level

*Select the notification level for the console.*

* <small>Access programmatically with `SETTINGS.application.console_notification_level`.</small>
* <small>Type: `NotificationSeverity`.</small>
* <small>Default: `<NotificationSeverity.NONE: 'none'>`.</small>
* <small>UI: This setting can be configured via the preferences dialog.</small>
#### Dask cache

*Settings for dask cache (does not work with distributed arrays)*

* <small>Access programmatically with `SETTINGS.application.dask`.</small>
* <small>Type: `DaskSettings`.</small>
* <small>Default: `DaskSettings(enabled=True, cache=4.191691776)`.</small>
* <small>UI: This setting can be configured via the preferences dialog.</small>
#### First time

*Indicate if napari is running for the first time. This setting is managed by the application.*

* <small>Access programmatically with `SETTINGS.application.first_time`.</small>
* <small>Type: `bool`.</small>
* <small>Default: `True`.</small>

#### Grid Height

*Number of rows in the grid.*

* <small>Access programmatically with `SETTINGS.application.grid_height`.</small>
* <small>Type: `ConstrainedIntValue`.</small>
* <small>Default: `-1`.</small>
* <small>UI: This setting can be configured via the preferences dialog.</small>
#### Grid Spacing

*Proportional spacing between grid layers.*

* <small>Access programmatically with `SETTINGS.application.grid_spacing`.</small>
* <small>Type: `ConstrainedFloatValue`.</small>
* <small>Default: `0.0`.</small>
* <small>UI: This setting can be configured via the preferences dialog.</small>
#### Grid Stride

*Number of layers to place in each grid square.*

* <small>Access programmatically with `SETTINGS.application.grid_stride`.</small>
* <small>Type: `ConstrainedIntValue`.</small>
* <small>Default: `1`.</small>
* <small>UI: This setting can be configured via the preferences dialog.</small>
#### Grid Width

*Number of columns in the grid.*

* <small>Access programmatically with `SETTINGS.application.grid_width`.</small>
* <small>Type: `ConstrainedIntValue`.</small>
* <small>Default: `-1`.</small>
* <small>UI: This setting can be configured via the preferences dialog.</small>
#### GUI notification level

*Select the notification level for the user interface.*

* <small>Access programmatically with `SETTINGS.application.gui_notification_level`.</small>
* <small>Type: `NotificationSeverity`.</small>
* <small>Default: `<NotificationSeverity.INFO: 'info'>`.</small>
* <small>UI: This setting can be configured via the preferences dialog.</small>
#### Delay to treat button as hold in seconds

*This affects certain actions where a short press and a long press have different behaviors, such as changing the mode of a layer permanently or only during the long press.*

* <small>Access programmatically with `SETTINGS.application.hold_button_delay`.</small>
* <small>Type: `float`.</small>
* <small>Default: `0.5`.</small>
* <small>UI: This setting can be configured via the preferences dialog.</small>
#### IPython interactive

*Toggle the use of interactive `%gui qt` event loop when creating napari Viewers in IPython.*

* <small>Access programmatically with `SETTINGS.application.ipy_interactive`.</small>
* <small>Type: `bool`.</small>
* <small>Default: `True`.</small>

#### Language

*Select the display language for the user interface.*

* <small>Access programmatically with `SETTINGS.application.language`.</small>
* <small>Type: `Language`.</small>
* <small>Default: `'en'`.</small>
* <small>UI: This setting can be configured via the preferences dialog.</small>
#### New labels data type

*data type for labels layers created with the "new labels" button.*

* <small>Access programmatically with `SETTINGS.application.new_labels_dtype`.</small>
* <small>Type: `LabelDTypes`.</small>
* <small>Default: `<LabelDTypes.uint8: 'uint8'>`.</small>
* <small>UI: This setting can be configured via the preferences dialog.</small>
#### Opened folders history

*Last saved list of opened folders. This setting is managed by the application.*

* <small>Access programmatically with `SETTINGS.application.open_history`.</small>
* <small>Type: `List[str]`.</small>
* <small>Default: `[]`.</small>

#### Playback frames per second

*Playback speed in frames per second.*

* <small>Access programmatically with `SETTINGS.application.playback_fps`.</small>
* <small>Type: `int`.</small>
* <small>Default: `10`.</small>
* <small>UI: This setting can be configured via the preferences dialog.</small>
#### Playback loop mode

*Loop mode for playback.*

* <small>Access programmatically with `SETTINGS.application.playback_mode`.</small>
* <small>Type: `LoopMode`.</small>
* <small>Default: `<LoopMode.LOOP: 'loop'>`.</small>
* <small>UI: This setting can be configured via the preferences dialog.</small>
#### Plugin widget positions

*Per-widget last saved position of plugin dock widgets. This setting is managed by the application.*

* <small>Access programmatically with `SETTINGS.application.plugin_widget_positions`.</small>
* <small>Type: `Mapping[str, str]`.</small>
* <small>Default: `{}`.</small>

#### Preferences size

*Last saved width and height for the preferences dialog. This setting is managed by the application.*

* <small>Access programmatically with `SETTINGS.application.preferences_size`.</small>
* <small>Type: `Optional[Tuple[int, int]]`.</small>
* <small>Default: `None`.</small>

#### Saved folders history

*Last saved list of saved folders. This setting is managed by the application.*

* <small>Access programmatically with `SETTINGS.application.save_history`.</small>
* <small>Type: `List[str]`.</small>
* <small>Default: `[]`.</small>

#### Save window geometry

*Toggle saving the main window size and position.*

* <small>Access programmatically with `SETTINGS.application.save_window_geometry`.</small>
* <small>Type: `bool`.</small>
* <small>Default: `True`.</small>
* <small>UI: This setting can be configured via the preferences dialog.</small>
#### Save window state

*Toggle saving the main window state of widgets.*

* <small>Access programmatically with `SETTINGS.application.save_window_state`.</small>
* <small>Type: `bool`.</small>
* <small>Default: `False`.</small>
* <small>UI: This setting can be configured via the preferences dialog.</small>
#### Window fullscreen

*Last saved fullscreen state for the main window. This setting is managed by the application.*

* <small>Access programmatically with `SETTINGS.application.window_fullscreen`.</small>
* <small>Type: `bool`.</small>
* <small>Default: `False`.</small>

#### Window maximized state

*Last saved maximized state for the main window. This setting is managed by the application.*

* <small>Access programmatically with `SETTINGS.application.window_maximized`.</small>
* <small>Type: `bool`.</small>
* <small>Default: `False`.</small>

#### Window position

*Last saved x and y coordinates for the main window. This setting is managed by the application.*

* <small>Access programmatically with `SETTINGS.application.window_position`.</small>
* <small>Type: `Optional[Tuple[int, int]]`.</small>
* <small>Default: `None`.</small>

#### Window size

*Last saved width and height for the main window. This setting is managed by the application.*

* <small>Access programmatically with `SETTINGS.application.window_size`.</small>
* <small>Type: `Optional[Tuple[int, int]]`.</small>
* <small>Default: `None`.</small>

#### Window state

*Last saved state of dockwidgets and toolbars for the main window. This setting is managed by the application.*

* <small>Access programmatically with `SETTINGS.application.window_state`.</small>
* <small>Type: `Optional[str]`.</small>
* <small>Default: `None`.</small>

#### Show status bar

*Toggle diplaying the status bar for the main window.*

* <small>Access programmatically with `SETTINGS.application.window_statusbar`.</small>
* <small>Type: `bool`.</small>
* <small>Default: `True`.</small>


### APPEARANCE

User interface appearance settings.


#### Font size

*Select the user interface font size.*

* <small>Access programmatically with `SETTINGS.appearance.font_size`.</small>
* <small>Type: `ConstrainedIntValue`.</small>
* <small>Default: `9`.</small>
* <small>UI: This setting can be configured via the preferences dialog.</small>
#### Highlight

*Select the highlight color and thickness to use when hovering over shapes/points.*

* <small>Access programmatically with `SETTINGS.appearance.highlight`.</small>
* <small>Type: `HighlightSettings`.</small>
* <small>Default: `HighlightSettings(highlight_thickness=1, highlight_color=[0.0, 0.6, 1.0, 1.0])`.</small>
* <small>UI: This setting can be configured via the preferences dialog.</small>
#### Show layer tooltips

*Toggle to display a tooltip on mouse hover.*

* <small>Access programmatically with `SETTINGS.appearance.layer_tooltip_visibility`.</small>
* <small>Type: `bool`.</small>
* <small>Default: `False`.</small>
* <small>UI: This setting can be configured via the preferences dialog.</small>
#### Theme

*Select the user interface theme.*

* <small>Access programmatically with `SETTINGS.appearance.theme`.</small>
* <small>Type: `Theme`.</small>
* <small>Default: `'dark'`.</small>
* <small>UI: This setting can be configured via the preferences dialog.</small>
#### Update status based on layer

*Calculate status bar based on current active layer and mouse position.*

* <small>Access programmatically with `SETTINGS.appearance.update_status_based_on_layer`.</small>
* <small>Type: `bool`.</small>
* <small>Default: `True`.</small>
* <small>UI: This setting can be configured via the preferences dialog.</small>

### PLUGINS

Plugins settings.


#### Plugin sort order

*Sort plugins for each action in the order to be called.*

* <small>Access programmatically with `SETTINGS.plugins.call_order`.</small>
* <small>Type: `Mapping[str, list[napari.settings._plugins.PluginHookOption]]`.</small>
* <small>Default: `{}`.</small>
* <small>UI: This setting can be configured via the preferences dialog.</small>
#### Disabled plugins

*Plugins to disable on application start.*

* <small>Access programmatically with `SETTINGS.plugins.disabled_plugins`.</small>
* <small>Type: `Set[str]`.</small>
* <small>Default: `set()`.</small>

#### File extension readers

*Assign file extensions to specific reader plugins*

* <small>Access programmatically with `SETTINGS.plugins.extension2reader`.</small>
* <small>Type: `Mapping[str, str]`.</small>
* <small>Default: `{}`.</small>
* <small>UI: This setting can be configured via the preferences dialog.</small>
#### Writer plugin extension association.

*Assign file extensions to specific writer plugins*

* <small>Access programmatically with `SETTINGS.plugins.extension2writer`.</small>
* <small>Type: `Mapping[str, str]`.</small>
* <small>Default: `{}`.</small>

#### Use npe2 adaptor

*Use npe2-adaptor for first generation plugins.
When an npe1 plugin is found, this option will
import its contributions and create/cache
a 'shim' npe2 manifest that allows it to be treated
like an npe2 plugin (with delayed imports, etc...)*

* <small>Access programmatically with `SETTINGS.plugins.use_npe2_adaptor`.</small>
* <small>Type: `bool`.</small>
* <small>Default: `False`.</small>
* <small>UI: This setting can be configured via the preferences dialog.</small>

### SHORTCUTS

Shortcut settings.


#### shortcuts

*Set keyboard shortcuts for actions.*

* <small>Access programmatically with `SETTINGS.shortcuts.shortcuts`.</small>
* <small>Type: `Mapping[str, list[app_model.types._keys._keybindings.KeyBinding]]`.</small>
* <small>Default: `{'napari:toggle_console_visibility': [<KeyBinding at 0x7fd3ea092890: Ctrl+Shift+C>], 'napari:reset_scroll_progress': [<KeyBinding at 0x7fd3ea0b07f0: Ctrl>], 'napari:toggle_ndisplay': [<KeyBinding at 0x7fd3ea0b06a0: Ctrl+Y>], 'napari:toggle_theme': [<KeyBinding at 0x7fd3ea0b0a90: Ctrl+Shift+T>], 'napari:reset_view': [<KeyBinding at 0x7fd3ea0b0850: Ctrl+R>], 'napari:delete_selected_layers': [<KeyBinding at 0x7fd3ea0b06d0: Ctrl+Delete>, <KeyBinding at 0x7fd3ea0b0340: Ctrl+Backspace>], 'napari:show_shortcuts': [<KeyBinding at 0x7fd3ea0b04c0: Ctrl+Alt+/>], 'napari:increment_dims_left': [<KeyBinding at 0x7fd3ea0b03d0: Left>], 'napari:increment_dims_right': [<KeyBinding at 0x7fd3ea0b0370: Right>], 'napari:focus_axes_up': [<KeyBinding at 0x7fd3ea0b00d0: Alt+Up>], 'napari:focus_axes_down': [<KeyBinding at 0x7fd3ea0b0190: Alt+Down>], 'napari:roll_axes': [<KeyBinding at 0x7fd3ea0b29b0: Ctrl+E>], 'napari:transpose_axes': [<KeyBinding at 0x7fd3ea0b2a40: Ctrl+T>], 'napari:rotate_layers': [<KeyBinding at 0x7fd3ea0b2aa0: Ctrl+Alt+T>], 'napari:toggle_grid': [<KeyBinding at 0x7fd3ea0b2b00: Ctrl+G>], 'napari:toggle_selected_visibility': [<KeyBinding at 0x7fd3ea0b2b90: V>], 'napari:toggle_unselected_visibility': [<KeyBinding at 0x7fd3ea0b2c20: Shift+V>], 'napari:show_only_layer_above': [<KeyBinding at 0x7fd3ea0b2c80: Shift+Alt+Up>], 'napari:show_only_layer_below': [<KeyBinding at 0x7fd3ea0b2ce0: Shift+Alt+Down>], 'napari:hold_for_pan_zoom': [<KeyBinding at 0x7fd3ea0b2d40: Space>], 'napari:activate_labels_erase_mode': [<KeyBinding at 0x7fd3ea0b2dd0: 1>, <KeyBinding at 0x7fd3ea0b2e60: E>], 'napari:activate_labels_paint_mode': [<KeyBinding at 0x7fd3ea0b2ec0: 2>, <KeyBinding at 0x7fd3ea0b2f50: P>], 'napari:activate_labels_polygon_mode': [<KeyBinding at 0x7fd3ea0b2fe0: 3>], 'napari:activate_labels_fill_mode': [<KeyBinding at 0x7fd3ea0b3070: 4>, <KeyBinding at 0x7fd3ea0b3100: F>], 'napari:activate_labels_picker_mode': [<KeyBinding at 0x7fd3ea0b3190: 5>, <KeyBinding at 0x7fd3ea0b3220: L>], 'napari:activate_labels_pan_zoom_mode': [<KeyBinding at 0x7fd3ea0b32b0: 6>, <KeyBinding at 0x7fd3ea0b3340: Z>], 'napari:activate_labels_transform_mode': [<KeyBinding at 0x7fd3ea0b33d0: 7>], 'napari:new_label': [<KeyBinding at 0x7fd3ea0b3460: M>], 'napari:swap_selected_and_background_labels': [<KeyBinding at 0x7fd3ea0b34f0: X>], 'napari:decrease_label_id': [<KeyBinding at 0x7fd3ea0b3580: ->], 'napari:increase_label_id': [<KeyBinding at 0x7fd3ea0b3610: =>], 'napari:decrease_brush_size': [<KeyBinding at 0x7fd3ea0b36a0: [>], 'napari:increase_brush_size': [<KeyBinding at 0x7fd3ea0b3730: ]>], 'napari:toggle_preserve_labels': [<KeyBinding at 0x7fd3ea0b37c0: B>], 'napari:reset_polygon': [<KeyBinding at 0x7fd3ea0b3850: Escape>], 'napari:complete_polygon': [<KeyBinding at 0x7fd3ea0b38e0: Enter>], 'napari:activate_points_add_mode': [<KeyBinding at 0x7fd3ea0b3970: 2>, <KeyBinding at 0x7fd3ea0b39d0: P>], 'napari:activate_points_select_mode': [<KeyBinding at 0x7fd3ea0b3a30: 3>, <KeyBinding at 0x7fd3ea0b3a90: S>], 'napari:activate_points_pan_zoom_mode': [<KeyBinding at 0x7fd3ea0b3b20: 4>, <KeyBinding at 0x7fd3ea0b3b80: Z>], 'napari:activate_points_transform_mode': [<KeyBinding at 0x7fd3ea0b3be0: 5>], 'napari:select_all_in_slice': [<KeyBinding at 0x7fd3ea0b3c40: A>, <KeyBinding at 0x7fd3ea0b3cd0: Ctrl+A>], 'napari:select_all_data': [<KeyBinding at 0x7fd3ea0b3d30: Shift+A>], 'napari:delete_selected_points': [<KeyBinding at 0x7fd3ea0b3d90: 1>, <KeyBinding at 0x7fd3ea0b3df0: Delete>, <KeyBinding at 0x7fd3ea0b3e50: Backspace>], 'napari:activate_add_rectangle_mode': [<KeyBinding at 0x7fd3ea0b3eb0: R>], 'napari:activate_add_ellipse_mode': [<KeyBinding at 0x7fd3ea0b3f10: E>], 'napari:activate_add_line_mode': [<KeyBinding at 0x7fd3ea0b3f70: L>], 'napari:activate_add_path_mode': [<KeyBinding at 0x7fd3ea0b3fd0: T>], 'napari:activate_add_polyline_mode': [<KeyBinding at 0x7fd3ea0cc070: Shift+L>], 'napari:activate_add_polygon_mode': [<KeyBinding at 0x7fd3ea0cc0d0: P>], 'napari:activate_add_polygon_lasso_mode': [<KeyBinding at 0x7fd3ea0cc130: Shift+P>], 'napari:activate_direct_mode': [<KeyBinding at 0x7fd3ea0cc190: 4>, <KeyBinding at 0x7fd3ea0cc1f0: D>], 'napari:activate_select_mode': [<KeyBinding at 0x7fd3ea0cc280: 5>, <KeyBinding at 0x7fd3ea0cc2e0: S>], 'napari:activate_shapes_pan_zoom_mode': [<KeyBinding at 0x7fd3ea0cc340: 6>, <KeyBinding at 0x7fd3ea0cc3a0: Z>], 'napari:activate_shapes_transform_mode': [<KeyBinding at 0x7fd3ea0cc400: 7>], 'napari:activate_vertex_insert_mode': [<KeyBinding at 0x7fd3ea0cc460: 2>, <KeyBinding at 0x7fd3ea0cc4c0: I>], 'napari:activate_vertex_remove_mode': [<KeyBinding at 0x7fd3ea0cc550: 1>, <KeyBinding at 0x7fd3ea0cc5b0: X>], 'napari:copy_selected_shapes': [<KeyBinding at 0x7fd3ea0cc610: Ctrl+C>], 'napari:paste_shape': [<KeyBinding at 0x7fd3ea0cc670: Ctrl+V>], 'napari:move_shapes_selection_to_front': [<KeyBinding at 0x7fd3ea0cc6d0: F>], 'napari:move_shapes_selection_to_back': [<KeyBinding at 0x7fd3ea0cc730: B>], 'napari:select_all_shapes': [<KeyBinding at 0x7fd3ea0cc790: A>], 'napari:delete_selected_shapes': [<KeyBinding at 0x7fd3ea0cc7f0: 3>, <KeyBinding at 0x7fd3ea0cc850: Delete>, <KeyBinding at 0x7fd3ea0cc8b0: Backspace>], 'napari:finish_drawing_shape': [<KeyBinding at 0x7fd3ea0cc910: Enter>, <KeyBinding at 0x7fd3ea0cc970: Escape>], 'napari:orient_plane_normal_along_x': [<KeyBinding at 0x7fd3ea0cc9d0: X>], 'napari:orient_plane_normal_along_y': [<KeyBinding at 0x7fd3ea0cca30: Y>], 'napari:orient_plane_normal_along_z': [<KeyBinding at 0x7fd3ea0cca90: Z>], 'napari:orient_plane_normal_along_view_direction': [<KeyBinding at 0x7fd3ea0ccaf0: O>], 'napari:activate_image_pan_zoom_mode': [<KeyBinding at 0x7fd3ea0ccb80: 1>], 'napari:activate_image_transform_mode': [<KeyBinding at 0x7fd3ea0ccbe0: 2>], 'napari:activate_vectors_pan_zoom_mode': [<KeyBinding at 0x7fd3ea0ccc40: 1>], 'napari:activate_vectors_transform_mode': [<KeyBinding at 0x7fd3ea0ccca0: 2>], 'napari:activate_tracks_pan_zoom_mode': [<KeyBinding at 0x7fd3ea0ccd00: 1>], 'napari:activate_tracks_transform_mode': [<KeyBinding at 0x7fd3ea0ccd60: 2>], 'napari:activate_surface_pan_zoom_mode': [<KeyBinding at 0x7fd3ea0ccdc0: 1>], 'napari:activate_surface_transform_mode': [<KeyBinding at 0x7fd3ea0cce20: 2>]}`.</small>
* <small>UI: This setting can be configured via the preferences dialog.</small>

### EXPERIMENTAL

Experimental settings.


#### Render Images Asynchronously

*Asynchronous loading of image data. 
This setting partially loads data while viewing.*

* <small>Access programmatically with `SETTINGS.experimental.async_`.</small>
* <small>Type: `bool`.</small>
* <small>Default: `False`.</small>
* <small>UI: This setting can be configured via the preferences dialog.</small>
#### Enable autoswapping rendering buffers.

*Autoswapping rendering buffers improves quality by reducing tearing artifacts, while sacrificing some performance.*

* <small>Access programmatically with `SETTINGS.experimental.autoswap_buffers`.</small>
* <small>Type: `bool`.</small>
* <small>Default: `False`.</small>
* <small>UI: This setting can be configured via the preferences dialog.</small>
#### Use C++ code to speed up creation and updates of Shapes layers(requires optional dependencies)

*When enabled, triangulation (breaking down polygons into triangles that can be displayed by napari's graphics engine) is sped up by using C++ code from the optional library PartSegCore-compiled-backend. C++ code can cause bad crashes called segmentation faults or access violations. If you encounter such a crash while using this option please report it at https://github.com/napari/napari/issues.*

* <small>Access programmatically with `SETTINGS.experimental.compiled_triangulation`.</small>
* <small>Type: `bool`.</small>
* <small>Default: `False`.</small>
* <small>UI: This setting can be configured via the preferences dialog.</small>
#### Double-click Labels polygon completion radius (-1 to always complete)

*Max radius in pixels from first vertex for double-click to complete a polygon; set -1 to always complete.*

* <small>Access programmatically with `SETTINGS.experimental.completion_radius`.</small>
* <small>Type: `int`.</small>
* <small>Default: `-1`.</small>
* <small>UI: This setting can be configured via the preferences dialog.</small>
#### Minimum distance threshold of shapes lasso and path tool

*Value determines how many screen pixels one has to move before another vertex can be added to the polygonor path.*

* <small>Access programmatically with `SETTINGS.experimental.lasso_vertex_distance`.</small>
* <small>Type: `ConstrainedIntValue`.</small>
* <small>Default: `10`.</small>
* <small>UI: This setting can be configured via the preferences dialog.</small>
#### Shapes polygon lasso and path RDP epsilon

*Setting this higher removes more points from polygons or paths. 
Setting this to 0 keeps all vertices of a given polygon or path.*

* <small>Access programmatically with `SETTINGS.experimental.rdp_epsilon`.</small>
* <small>Type: `ConstrainedFloatValue`.</small>
* <small>Default: `0.5`.</small>
* <small>UI: This setting can be configured via the preferences dialog.</small>

**Support for plugin specific settings will be provided in an upcoming release.**

## Changing settings programmatically

```python
from napari.settings import SETTINGS

SETTINGS.appearance.theme = "light"
```

## Reset to defaults via CLI

To reset all napari settings to the default values:

```bash
napari --reset
```

## The preferences dialog

Starting with version 0.4.6, napari provides a preferences dialog to manage
some of the provided options.

### Application

![application](../images/_autogenerated/preferences-application.png)



### Appearance

![appearance](../images/_autogenerated/preferences-appearance.png)



### Plugins

![plugins](../images/_autogenerated/preferences-plugins.png)



### Shortcuts

![shortcuts](../images/_autogenerated/preferences-shortcuts.png)



### Experimental

![experimental](../images/_autogenerated/preferences-experimental.png)



### Reset to defaults via UI

To reset the preferences click on the `Restore defaults` button and continue
by clicking on `Restore`.

![](../images/_autogenerated/preferences-reset.png)
