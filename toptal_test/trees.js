// A gardener consider aesthetically appealing gardens in which the tops of sequential
// physical trees (eg palm trees) are always sequentially going up and down, that is:
//
// |               |
// |       |       |
// |   |   |   |   |
//
// On the other hand, the following configurations would be invalid:
//
// |
// |  |
// |  |  |
// reason: 3rd tree should be higher than the 2nd one
//
// |  |
// |  |
// |  |
// reason: consecutive trees cannot have the same height
//
// https://cs.stackexchange.com/questions/116854/minimum-number-of-tree-cuts-so-that-each-pair-of-trees-alternates-between-strict
