/// <reference path='vec3d.d.ts'/>
/// <reference path='inventory.d.ts'/>
/// <reference path='nbt.d.ts'/>

/**
 * Wrapper for Minecraft's Entity class
 */
interface Entity {
    /**
     * Get position of an entity
     */
    get_pos() : Vec3d;

    /**
     * Set the position of an entity
     * 
     * @remarks
     * Uses `/tp` to set position
     * 
     * @param pos Position
     */
    set_pos(pos : Vec3d) : void;

    /**
     * Get remaining air
     */
    get_air() : number;

    /**
     * Set remaining air
     * @param air New air
     */
    set_air(air : number) : void;
    
    /**
     * Is the entity living (i.e. has health)
     */
    is_living_entity() : boolean;

    /**
     * Gets the current health of the entity
     * 
     * @remarks
     * Entity must be living
     * @see {@link is_living_entity}
     */
    get_hp() : number | null;

    /**
     * Sets the health of the entity
     * 
     * @remarks
     * Entity must be living
     * @see {@link is_living_entity}
     * 
     * @param amount Amount
     */
    set_hp(amount : number) : void;

    /**
     * Gets the entity's name
     */
    get_name() : string;

    /**
     * Gets the entity's armor level
     * 
     * @remarks
     * Entity must be living
     * @see {@link is_living_entity}
     */
    get_armor() : number | null;

    /**
     * Gets an entity's age in ticks
     * 
     * @remarks
     * Entity must be living
     * @see {@link is_living_entity}
     */
    get_age() : number | null;

    /**
     * Sets an entity's age in ticks
     * 
     * @remarks
     * Entity must be living
     * @see {@link is_living_entity}
     * 
     * @param age Age
     */
    set_age(age : number) : void;

    /**
     * Gets an nbt object from the entity
     * 
     * @remarks
     * `path` cannot include subpaths, as `/data get` has. This may change eventually
     * 
     * @param path NBT key
     */
    get_nbt(path : string) : NbtElement;

    /**
     * Merges a table with the entity's nbt data
     * 
     * @param obj Nbt object
     */
    merge_nbt(obj : NbtCompound) : void;

    /**
     * Get's the entity's inventory
     */
    get_inventory() : Inventory;
}
