// We are building an Undirected Graph

// Adding A Vertex:
// > Write a method called addVertex, which accepts a name of a vertex
// > It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array


// Adding An Edge:
// > This function should accept two vertices, we can call them vertex1 and vertex2
// > The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
// > The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
// > Don't worry about handling errors/invalid vertices

// Removing An Edge:
// > This function should accept two vertices, we'll call them vertex1 and vertex2
// > The function should reassign the key of vertex1 to be an array that does not contain vertex2
// > The function should reassign the key of vertex2 to be an array that does not contain vertex1
// > Don't worry about handling errors/invalid vertices

// Removing A Vertex:
// > The function should accept a vertex to remove
// > The function should loop as long as there are any other vertices in the adjacency list for that vertex
// > Inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
// > delete the key in the adjacency list for that vertex

class Graph {
    constructor(){
        this.adjacencyList = {}
    }
}