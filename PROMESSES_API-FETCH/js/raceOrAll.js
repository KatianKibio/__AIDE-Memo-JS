function tryGetFile(filename){
	return new Promise(function(resolve, reject){
		var file =  tryReadFile(filename)
		if(!!file){
			resolve(file)
		}else{
			reject('Fichier indisponible')
		}
	})
}

//La méthode .all() sera considérée comme fulfilled si toutes les promesses du tableau sont fulfilled,
//et inversement, comme rejected si une seule des Promise est rejected.
//attendre la résolution d'un groupe avec .all()
Promise//toute les traiter
//La valeur retournée sera alors un tableau contenant les résultats des toutes les Promises , dans l'ordre d'appel. 
	.all([tryGetFile('fichier/fichier.txt'), tryGetFile('fichier/fichier2.txt'), tryGetFile('fichier/fichier3.txt')])
	.then((values)=> console.log(values))
	.catch((error)=> console.log(error))

	const promise1 = new Promise((resolve, reject)=> setTimeout(resolve, 500, 'premiere'))
	const promise2 = new Promise((resolve, reject)=> setTimeout(resolve, 100, 'seconde'))
	const pop = new Promise((resolve, reject)=> setTimeout(resolve, 99, 'fast 99'))
	const promise3 = new Promise((resolve, reject)=> setTimeout(resolve, 660, 'troisième'))

//ne garder que la plus rapide avec .race()
Promise//le plus rapide l'emporte
	.race([promise1, pop, promise2, promise3])//pop sera afficher
	.then((result)=> console.log(result))