// File for hackernoon c problem solving
#include "stdio.h"
#include <stdbool.h>

// In the following problem, find the number of apples and oranges that fall on the house
/* The function accepts following parameters:
 1. INTEGER s: start value house position
 2. INTEGER t: end value house position
 3. INTEGER a: apple (left) tree position
 4. INTEGER b: orange (right) tree position
 5. INTEGER_ARRAY apples: list of fallen apples positions
 6. INTEGER_ARRAY oranges: list of fallen orange positions
*/

int fallen_fruit_position(int tree, int fruit)
{
    return tree + fruit;
}

bool has_fallen_on_house(int s, int t, int tree, int fruit)
{
    if ((fallen_fruit_position(tree, fruit) >= s) && (fallen_fruit_position(tree, fruit) <= t))
    {
        return true;
    }

    return false;
}

int count_fruit(int s, int t, int tree, int *fruits, int fruit_count)
{
    int fruits_on_house = 0;

    for (int i = 0; i < fruit_count; i++)
    {
        if (has_fallen_on_house(s, t, tree, fruits[i]))
        {
            fruits_on_house++;
        }
    }

    return fruits_on_house;
}

void printApplesAndOranges(int s, int t, int a, int b, int apples_count, int apples[], int oranges_count, int oranges[])
{
    printf("%d\n", count_fruit(s, t, a, apples, apples_count));
    printf("%d\n", count_fruit(s, t, b, oranges, oranges_count));
}

int main()
{
    int apples[] = {2};
    int oranges[] = {-2};
    printApplesAndOranges(2, 3, 1, 5, 1, apples, 1, oranges);
}
