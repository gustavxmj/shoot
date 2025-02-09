// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`500010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000003030303000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000303030300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000030303030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000001000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000010000000300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000010102000003030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000201010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000200000300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020101010000020003030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010107000000000002000303000000000000000000000000000000000000000000000000000000000000000000000000000003030303030303030303030300000000000000000000000101010101010104040600000000010201000000000000000000000000000000000000000000000003030303030303030303030303030303030300000000000000000000030000000000000000000000030300000000000000000000010100000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000003000000000000000000000003030000000000000000000102000000030303000000000000000000000000000000000000000000030000000000000000010101010101000000000000000000000000000300000000000000000000000101000000000000000101020000000303030300000000000000000000000000000000030303030303010101010101010100000000000003000003030303030303030303030000000000000000000001020201000000000001020202000003030303050101010101010101010101010101010101010101010102020202020202020000000000000301010101010101010101010101010101010101010101010202020201010101010202020202020202020202`, img`
......................................................................2.........
......................................................................2.........
......................................................................2.........
......................................................................2.....2...
......................................................................2....2....
......................................................................2..222....
......................................................................2....222..
......................................................................2.....2...
......................................................................2222..2...
....................................................................222.....2...
.............................................................2222222222....222..
.........................................................................22.....
........................................................................22......
..............................222222.........................22.......222.......
......................22222222..............................2222.....2222.......
222222222222222222222222222222.......2222222222222222222222222222222222222222222
`, [myTiles.transparency16,sprites.castle.tilePath2,sprites.castle.tilePath5,myTiles.tile1,sprites.castle.tilePath8,myTiles.tile2,sprites.castle.tilePath9,sprites.castle.tilePath6], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
