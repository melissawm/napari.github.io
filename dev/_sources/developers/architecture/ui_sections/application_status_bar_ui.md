## Application status bar
### Dependencies diagram (related `napari` modules)
```{mermaid}
graph LR
	accTitle: Dependencies between modules in the napari Application status bar UI section
	accDescr: Diagram showing the dependencies between the modules involved in the definition of the napari Application status bar UI section
	napari._qt(napari._qt)
	napari._qt --> napari._qt.qt_main_window
	click napari._qt "https://github.com/napari/napari/tree/main/napari/_qt/__init__.py" _blank
	napari._qt.dialogs.qt_activity_dialog(napari._qt.dialogs.qt_activity_dialog)
	napari._qt.dialogs.qt_activity_dialog --> napari._qt.widgets.qt_progress_bar
	napari._qt.dialogs.qt_activity_dialog --> napari.utils.progress
	click napari._qt.dialogs.qt_activity_dialog "https://github.com/napari/napari/tree/main/napari/_qt/dialogs/qt_activity_dialog.py" _blank
	napari._qt.dialogs.shimmed_plugin_dialog(napari._qt.dialogs.shimmed_plugin_dialog)
	click napari._qt.dialogs.shimmed_plugin_dialog "https://github.com/napari/napari/tree/main/napari/_qt/dialogs/shimmed_plugin_dialog.py" _blank
	napari._qt.qt_main_window(napari._qt.qt_main_window)
	napari._qt.qt_main_window --> napari._qt.dialogs.qt_activity_dialog
	napari._qt.qt_main_window --> napari._qt.dialogs.shimmed_plugin_dialog
	napari._qt.qt_main_window --> napari._qt.threads.status_checker
	napari._qt.qt_main_window --> napari._qt.widgets.qt_command_palette
	napari._qt.qt_main_window --> napari._qt.widgets.qt_viewer_status_bar
	napari._qt.qt_main_window --> napari.viewer
	click napari._qt.qt_main_window "https://github.com/napari/napari/tree/main/napari/_qt/qt_main_window.py" _blank
	napari._qt.threads.status_checker(napari._qt.threads.status_checker)
	click napari._qt.threads.status_checker "https://github.com/napari/napari/tree/main/napari/_qt/threads/status_checker.py" _blank
	napari._qt.widgets.qt_command_palette(napari._qt.widgets.qt_command_palette)
	napari._qt.widgets.qt_command_palette --> napari._qt.qt_main_window
	click napari._qt.widgets.qt_command_palette "https://github.com/napari/napari/tree/main/napari/_qt/widgets/qt_command_palette.py" _blank
	napari._qt.widgets.qt_progress_bar(napari._qt.widgets.qt_progress_bar)
	napari._qt.widgets.qt_progress_bar --> napari.utils.progress
	click napari._qt.widgets.qt_progress_bar "https://github.com/napari/napari/tree/main/napari/_qt/widgets/qt_progress_bar.py" _blank
	napari._qt.widgets.qt_viewer_status_bar(napari._qt.widgets.qt_viewer_status_bar)
	napari._qt.widgets.qt_viewer_status_bar --> napari._qt.dialogs.qt_activity_dialog
	napari._qt.widgets.qt_viewer_status_bar --> napari._qt.qt_main_window
	click napari._qt.widgets.qt_viewer_status_bar "https://github.com/napari/napari/tree/main/napari/_qt/widgets/qt_viewer_status_bar.py" _blank
	napari.utils.progress(napari.utils.progress)
	click napari.utils.progress "https://github.com/napari/napari/tree/main/napari/utils/progress.py" _blank
	napari.viewer(napari.viewer)
	napari.viewer --> napari._qt
	napari.viewer --> napari._qt.qt_main_window
	click napari.viewer "https://github.com/napari/napari/tree/main/napari/viewer.py" _blank
	subgraph module.napari[napari]
		 napari._qt
		 napari.viewer
	end
	class module.napari subgraphs
	subgraph module.napari._qt.dialogs[napari._qt.dialogs]
		 napari._qt.dialogs.qt_activity_dialog
		 napari._qt.dialogs.shimmed_plugin_dialog
	end
	class module.napari._qt.dialogs subgraphs
	subgraph module.napari._qt[napari._qt]
		 napari._qt.qt_main_window
	end
	class module.napari._qt subgraphs
	subgraph module.napari._qt.threads[napari._qt.threads]
		 napari._qt.threads.status_checker
	end
	class module.napari._qt.threads subgraphs
	subgraph module.napari._qt.widgets[napari._qt.widgets]
		 napari._qt.widgets.qt_command_palette
		 napari._qt.widgets.qt_progress_bar
		 napari._qt.widgets.qt_viewer_status_bar
	end
	class module.napari._qt.widgets subgraphs
	subgraph module.napari.utils[napari.utils]
		 napari.utils.progress
	end
	class module.napari.utils subgraphs
	classDef subgraphs fill:white,strock:black,color:black;	classDef default fill:#00c3ff,color:black;
	linkStyle default stroke:#00c3ff
	classDef external fill:#ffa600,color:black;
```
### Source code directory layout (related to modules inside `napari`)
```
napari/
├─viewer.py
├─_qt/
│ ├─widgets/
│ │ ├─qt_command_palette.py
│ │ ├─qt_progress_bar.py
│ │ └─qt_viewer_status_bar.py
│ ├─qt_main_window.py
│ ├─threads/
│ │ └─status_checker.py
│ ├─dialogs/
│ │ ├─shimmed_plugin_dialog.py
│ │ └─qt_activity_dialog.py
│ └─__init__.py
└─utils/
  └─progress.py
```
