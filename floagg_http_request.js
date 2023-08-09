/*
 * <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3
 * <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3
 * <3 -  Julie .C - 2023  - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - Floagg Entreprise - <3 - <3 - <3
 * <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3
 * <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3
 * @copyright ( https://www.floagg.org/) - JULIE .C
 */
var floagg_http_request = {
	send(http_mod = "POST", url_set = "", callback_function_after_reponse = null) {

		this.xhr = new XMLHttpRequest();
		this.xhr.responseType = this.reponseType
		this.xhr.onload = function () {
			let reponse = this.response; // On stocke la reponse

			/*
			 *
			 * Si l'API répond une valeur null par rapport à l'entrée "this.reponseType",
			 * Alor nous affichons un message d'erreur
			 *
			 */
			if(reponse === null) {
				console.error('[floagg_http_request] Error in typer response syntax. ('+url_set+')')
				displayError()
				return 0;
			}

			// Si l'utilisateur à définit une fonction de callback, alors on l'execute
			if(callback_function_after_reponse !== null)
				callback_function_after_reponse(reponse);
		};

		this.xhr.open(http_mod, url_set, true);
		this.xhr.send(this.parse_data_send);
	},
	/*
	 * Cette fonction permet de transformer une liste Object,
	 * En Array, pour ensuite les transformer en Objec FormData,
	 * Pour les envoyer à l'API par POST ou bien GET
	 */
	set data(parse_data_send) {
		// https://www.samanthaming.com/tidbits/76-converting-object-to-array/
		// 2023-08-09 - FLOAGG ENTREPRISE

		const entries = Object.entries(parse_data_send);
		entries.forEach(([key, value]) => {
			// KEY: est nom variable récupérré par l'API qui est définit par l'utilisateur
			// VALUE: est valeur variable récupérré par l'API qui est définit par l'utilisateur
  			this.parse_data_send.append(key, value)
		})
	},
	reponseType: 'json',
	parse_data_send: new FormData(),
	xhr: null
}
/*
 * <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3
 * <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3
 * <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3
 * <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3
 * <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3 - <3
 */