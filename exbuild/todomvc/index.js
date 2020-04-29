/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".index.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"./pkg/index_bg.wasm": function() {
/******/ 			return {
/******/ 				"./index_bg.js": {
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_cb_forget": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_cb_forget"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_cb_drop": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_cb_drop"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_error_4bb6c2a97407129a": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_error_4bb6c2a97407129a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_59cb74e423758ede": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_new_59cb74e423758ede"]();
/******/ 					},
/******/ 					"__wbg_stack_558ba5917b466edd": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_stack_558ba5917b466edd"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_f66ee047e567d37e": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_Window_f66ee047e567d37e"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_6afeff73f2c4450f": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_document_6afeff73f2c4450f"](p0i32);
/******/ 					},
/******/ 					"__wbg_localStorage_b8b63479d068c8ca": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_localStorage_b8b63479d068c8ca"](p0i32);
/******/ 					},
/******/ 					"__wbg_location_3a00a3e6a4ee1d63": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_location_3a00a3e6a4ee1d63"](p0i32);
/******/ 					},
/******/ 					"__wbg_body_571aaf67443bf5ee": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_body_571aaf67443bf5ee"](p0i32);
/******/ 					},
/******/ 					"__wbg_createElement_d6c085ee8bb866af": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_createElement_d6c085ee8bb866af"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_querySelectorAll_1d6c1e29bf9932cd": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_querySelectorAll_1d6c1e29bf9932cd"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlInputElement_29632bf7627ad3b9": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_HtmlInputElement_29632bf7627ad3b9"](p0i32);
/******/ 					},
/******/ 					"__wbg_checked_710f046e92ccb4e8": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_checked_710f046e92ccb4e8"](p0i32);
/******/ 					},
/******/ 					"__wbg_setchecked_83595cadbbe0d9e4": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_setchecked_83595cadbbe0d9e4"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_value_0dff16059542d036": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_value_0dff16059542d036"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setvalue_420fac6ba021e7fc": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_setvalue_420fac6ba021e7fc"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Node_19c575912650fdae": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_Node_19c575912650fdae"](p0i32);
/******/ 					},
/******/ 					"__wbg_parentElement_4d08b2bc9cbae5ef": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_parentElement_4d08b2bc9cbae5ef"](p0i32);
/******/ 					},
/******/ 					"__wbg_textContent_d2f07f17d1ed81fc": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_textContent_d2f07f17d1ed81fc"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_settextContent_394eaa3331226966": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_settextContent_394eaa3331226966"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_appendChild_bbc0804c00934eff": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_appendChild_bbc0804c00934eff"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_isEqualNode_e9245272ca637a9f": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_isEqualNode_e9245272ca637a9f"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_removeChild_68c3193d06f5b03d": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_removeChild_68c3193d06f5b03d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_EventTarget_24968cc08b5ebdcf": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_EventTarget_24968cc08b5ebdcf"](p0i32);
/******/ 					},
/******/ 					"__wbg_addEventListener_74a3c79f33cb228d": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_addEventListener_74a3c79f33cb228d"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_addEventListener_0f659ef2d0d95d57": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_addEventListener_0f659ef2d0d95d57"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_removeEventListener_1a2948c5bcbb8e52": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_removeEventListener_1a2948c5bcbb8e52"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_instanceof_KeyboardEvent_8845db41ab08d6f4": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_KeyboardEvent_8845db41ab08d6f4"](p0i32);
/******/ 					},
/******/ 					"__wbg_keyCode_e0ae6f03394396f1": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_keyCode_e0ae6f03394396f1"](p0i32);
/******/ 					},
/******/ 					"__wbg_target_47c82e691debb6f8": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_target_47c82e691debb6f8"](p0i32);
/******/ 					},
/******/ 					"__wbg_instanceof_HtmlElement_4531009b82ec938d": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_HtmlElement_4531009b82ec938d"](p0i32);
/******/ 					},
/******/ 					"__wbg_dataset_deb1281d12469bc6": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_dataset_deb1281d12469bc6"](p0i32);
/******/ 					},
/******/ 					"__wbg_sethidden_787545a24d18069d": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_sethidden_787545a24d18069d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_blur_18586910e435cbb5": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_blur_18586910e435cbb5"](p0i32);
/******/ 					},
/******/ 					"__wbg_focus_71a8334dc5221384": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_focus_71a8334dc5221384"](p0i32);
/******/ 					},
/******/ 					"__wbg_getItem_55b6c39663058b85": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_getItem_55b6c39663058b85"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_setItem_350c5b41803d9fb3": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_setItem_350c5b41803d9fb3"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_get_988f9ba34e4dfe70": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_get_988f9ba34e4dfe70"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_set_fd51528b83ad9241": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_set_fd51528b83ad9241"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Element_0fc9777c4bc7ec77": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_instanceof_Element_0fc9777c4bc7ec77"](p0i32);
/******/ 					},
/******/ 					"__wbg_setclassName_23c76b3dd3f45bd0": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_setclassName_23c76b3dd3f45bd0"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_classList_493529148e25bef3": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_classList_493529148e25bef3"](p0i32);
/******/ 					},
/******/ 					"__wbg_setinnerHTML_4c1eec657dcf953e": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_setinnerHTML_4c1eec657dcf953e"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_querySelector_1cb68d96b2721e3e": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_querySelector_1cb68d96b2721e3e"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_add_dab6f9bea69d2518": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_add_dab6f9bea69d2518"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_remove_d174871093e47173": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_remove_d174871093e47173"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_exception_03e260b32e4d7eef": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_exception_03e260b32e4d7eef"](p0i32);
/******/ 					},
/******/ 					"__wbg_hash_e2459c31b72de855": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_hash_e2459c31b72de855"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_length_0d906b658d62b099": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_length_0d906b658d62b099"](p0i32);
/******/ 					},
/******/ 					"__wbg_get_d8141c2a9baf01b5": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_get_d8141c2a9baf01b5"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_0963458889a0503f": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_new_0963458889a0503f"]();
/******/ 					},
/******/ 					"__wbg_isArray_dc956802760af563": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_isArray_dc956802760af563"](p0i32);
/******/ 					},
/******/ 					"__wbg_push_0275cbb800adbafa": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_push_0275cbb800adbafa"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_shift_e283dd05ffb70018": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_shift_e283dd05ffb70018"](p0i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_e710e627874fc912": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_newnoargs_e710e627874fc912"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_ae0789b871c5d57f": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_call_ae0789b871c5d57f"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_next_c30c7abd98582718": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_next_c30c7abd98582718"](p0i32);
/******/ 					},
/******/ 					"__wbg_next_a9e623b4fa432d79": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_next_a9e623b4fa432d79"](p0i32);
/******/ 					},
/******/ 					"__wbg_done_5106604f9fa3a15e": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_done_5106604f9fa3a15e"](p0i32);
/******/ 					},
/******/ 					"__wbg_value_6bf5701ee5aee28b": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_value_6bf5701ee5aee28b"](p0i32);
/******/ 					},
/******/ 					"__wbg_now_6090fbd237a8f04d": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_now_6090fbd237a8f04d"]();
/******/ 					},
/******/ 					"__wbg_iterator_1a6aba5bcf4c2800": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_iterator_1a6aba5bcf4c2800"]();
/******/ 					},
/******/ 					"__wbg_globalThis_f2ab166b2dad2691": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_globalThis_f2ab166b2dad2691"]();
/******/ 					},
/******/ 					"__wbg_self_0f608b57f60a1319": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_self_0f608b57f60a1319"]();
/******/ 					},
/******/ 					"__wbg_window_b7fda4753d5a6f96": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_window_b7fda4753d5a6f96"]();
/******/ 					},
/******/ 					"__wbg_global_5a16f080534aa1b3": function() {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_global_5a16f080534aa1b3"]();
/******/ 					},
/******/ 					"__wbg_get_aaa2cb40d5f215dc": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_get_aaa2cb40d5f215dc"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_is_function": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_is_function"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_object": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_is_object"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_parse_b391ac397ed15226": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_parse_b391ac397ed15226"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_stringify_1c7763eb55ea7eb7": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbg_stringify_1c7763eb55ea7eb7"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_get": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_string_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_boolean_get": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_boolean_get"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_rethrow": function(p0i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_rethrow"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper467": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_closure_wrapper467"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper469": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/index_bg.js"].exports["__wbindgen_closure_wrapper469"](p0i32,p1i32,p2i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"1":["./pkg/index_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"./pkg/index_bg.wasm":"f76aa161dcba759da257"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// For more comments about what's going on here, check out the `hello_world`\n// example\nconst rust = Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./pkg */ \"./pkg/index.js\"));\n\nrust\n  .then(m => m.run())\n  .catch(console.error);\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });