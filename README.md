# problems

This repository stores the source data for problems on O(fast).

# instructions for problem creation

1. Create a new folder in the `problems` directory with the name of the problem.

2. Create a `problem.json` file in the folder you just created. This file should contain the necessary metadata for the problem. Here is an example of what the file should look like:

```json
{
        "problemID": "twosum",
        "title": "Two Sum",
        "text": "Alice and Bob are working on a secret project where they need to find two numbers in an array that add up to a specific target. They are running out of time and need your help to implement a solution. Can you assist them?\n\nLorem ipsum, dolor sit amet consectetur adipisicing elit. Aut sed placeat, itaque nesciunt hic ea molestiae voluptas error ad consequuntur distinctio animi, accusamus mollitia. Itaque debitis voluptates cupiditate dolorem animi!",
        "problem": "Write a program that takes an array of integers $nums$ and an integer target. The program should return indices of the two numbers such that they add up to the target.",
        "input": "The input consists of a single test case. The first line includes two integers $n$ $(1 ≤ n ≤ 10^4)$ and $t$ $(-10^9 ≤ t ≤ 10^9)$, representing the length of the array and the target integer, respectively. The second line consists of $n$ space-separated integers of array $nums$, denoted as $c_1, c_2, ..., c_n$, where each $c_i$ falls within the range $-10^9 ≤ ci ≤ 10^9$.",
        "output": "Output two space-separated integers, representing the indices ($0$-based) of two numbers within the array nums that sum up to the given target, $t$.",
        "sampleData": [
        {
            "input": "5 4\n3 0 7 4 2",
            "output": "1 3"
        },
        {
            "input": "3 110\n10 50 100",
            "output": "0 2"
        }
        ],
        "tags": ["Tag 1", "Tag 2", "Tag 3"],
        "resources": [
        {
            "name": "Google1",
            "url": "https://www.google.com"
        },
        {
            "name": "Google2",
            "url": "https://www.google.com"
        }
        ]
}
```

3. Add a directory called data containing the input and output files for the problem. The input and output files should be \*.in and \*.out files, respectively. The input and output file names for a specific test should be the same.

