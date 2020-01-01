function knn(vtOne, vtTwo) 
{
    if (typeof vtOne === "object" && typeof vtTwo === "object")
    {
        const zip = (arr1, arr2) => arr1.map((k, i) => [k, arr2[i]]);
        var raiz = zip(vtOne, vtTwo);
        var de = [];
        raiz.forEach(element => {
            de.push(Math.abs(element[0] - element[1]));
        });
        var de_two = [];
        de.forEach(element => {
            de_two.push(element**2);
        });
        var soma = 0;
		for (var i = 0; i < de_two.length; i++) { // * Soma dos números de um array
			soma += de_two[i];
		}
        var raiz = Math.sqrt(soma);
        return raiz;
        
    }

    return "O knn deve conter listas";    
}
const a = [0.9, 0.0, 0.5, 0.1],
b = [0.0, 0.2, 0.2, 0.8];

console.log(knn(a, b));