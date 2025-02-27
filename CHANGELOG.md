## 0.11.1-beta
* 1.20.4 support

## 0.11.0-beta

* 1.20 + 1.20.1 support
* `load` and `tick` fields in `_project.lua`

## 0.10.2-beta

* New `inventory.clear` method
* Reworked `entity.set_pos` and added `entity.get_rot` and `entity.set_rot`
* Fixed an issue where `print` and `print_db` would not use the `__tostring` metamethod if it exists
    * [Bug report](https://github.com/kinderhead/LuaDatapack/issues/11)

## 0.10.1-beta

* Fixed a bug where the mod would just not work
    * [Bug report](https://github.com/kinderhead/LuaDatapack/issues/10)

## 0.10.0-beta

* `/lua` command now returns any integer that the lua script returns
* New `std:storage` module which allows permanent storage
    * Use `storage.save()` and `storage.load()` to store data. Check the documentation for more information
* Added support for `print()`
* New `print_db()` function which prints to the console instead of chat
* Modified `entity.add_effect` slightly
* Added new global variable `filename`
* Added project system
* Bug fixes
    * Fixed some issues with importing modules

## 0.9.0-beta

* Updated to 1.19.4
* Did some clean up

## 0.8.0-beta

* Not sure where this version went. Oops

## 0.7.1-beta

* Moved command wrapper functions to their own module: `std:commands`
    * `run` is still in the global namespace, this may change

## 0.7.0-beta

* Not much, but there has not been a release in a while
* Separated a couple of standard lua libraries. They are no longer instantiated every time `/lua` is ran, improving performance
    * `std:math`
    * `std:string`
    * `std:bit32`
    * `std:utf8`
* Api features
    * `Entity.new`
        * Alternative to `summon`, it returns the entity spawned. `Entity` is a global variable representing the entity type as seen in [entity.d.ts](https://github.com/kinderhead/LuaDatapack/blob/master/luadatapacktypes/src/entity.d.ts)

## 0.6.0-beta

* New standard library: `class.lua`. If you prefer a different OOP library, you can add one to the datapack
* Top level return with `run()`
* Api features
    * `entity.add_effect`
    * `entity.clear_effects`
* Bug fixes
    * Certain api calls displayed output in the chat. This is no longer the case

## 0.5.0-beta

* Api features
    * Nbt types for tstl
        * `NbtElement`
        * `NbtCompound`
        * `NbtList`
    * Inventory api
    * `entity.inventory`
    * `get_blockentity`
    * `Inventory`
    * `ItemStack`
    * `BlockEntity`

## 0.4.1-beta

* Quick fix to include icon in mod for compatibility with mod menus
    * Also fixed a couple of config settings

## 0.4.0-beta

* Beta release
* Script arguments
* Api features
    * `args`
* Bug fixes
    * Fixed errors not displaying in chat
    * Many minor things

## 0.3.1-alpha

* Command autocomplete
* Player nbt editing

## 0.3.0-alpha

* NBT!
* Api features
    * `entity.get_nbt`
    * `entity.merge_nbt`

## 0.2.0-alpha

* Api features
    * `entity.get_armor`
    * `entity.get_age`
    * `entity.set_age`
    * `get_block`
    * `set_block`

## 0.1.0-alpha

* First release!
* `/lua` command to run scripts
* A few api features, viewable [here](https://kinderhead.github.io/LuaDatapack/)
* Standard library includes [json.lua](https://github.com/rxi/json.lua)
