# parsegraph-size

This module provides a Size object, for managing a width/height combination:

    import Size from 'parsegraph-size';

    const size = new Size(500, 500);
    const scaled = size.scaled(50);
    console.log(scaled);

Output:

    [w=50, h=50]
