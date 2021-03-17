class KNN {
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
        this.de = [];
        this.sum = 0;
    }
    init() {
        if (Array.isArray(this.x) && Array.isArray(this.y)) {
        
            const zip = (arr1, arr2) => arr1.map((k, i) => [k, arr2[i]]);
            var rot = zip(this.x, this.y);
    
            rot.forEach(element => {
                this.de.push((element[0] - element[1]) ** 2 );
            });
            this.de.forEach(i => {
                this.sum += i;
            })
            
            this.sum = Math.sqrt(this.sum);
            return this.sum; // DE Distancia Euclidiana quanto menor, mais proximo esta
        }

    }

    
}


// ##### Classificando
/*
Violencia | Romance | Acao | Comedia | Classe
   0.6       0.0       0.3      0      Terror    Invocacao do mal
________________________________________________
    0.1      0.2       0.1     0.9   | Comedia    Meu passado me condena
    
*/
// Implementendo teste
console.log(new KNN([0.8, 0.1, 0.5, 0], [0.6, 0, 0.3, 0]).init()) // 0.3 // Terror
console.log(new KNN([0.8, 0.1, 0.5, 0], [0.1, 0.2, 0.1, 0.9]).init()) // 1.2 // Comedia

// Sera classificado como Terror


// ############


// console.log(new KNN([5, 7, 9], [5, 5, 5]).init())
// console.log(new KNN([1, 1, 1, 3], [2, 2, 1, 2]).init())
// console.log(new KNN([3, 3.5], [3, 4]).init())
// 



// console.log(new KNN([4, 10, 1], [4, 8, 2]).init())
// var itens = [[2, 4, 6], [4, 8, 2], [7, 5, 1]];


// movies = [];
// itens.forEach(iten => {
//     if (new KNN([4, 10, 1], iten).init() < 3) movies.push(iten);
//     console.log(new KNN([4, 10, 1], iten).init());
// })
// console.log(movies);
