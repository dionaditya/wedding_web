import { RpgMap, MapData } from '@rpgjs/server'
import {  VillagerEvent, VillagerEvent2 } from '../events/villager'

@MapData({
    id: 'simplemap',
    file: require('./tmx/simplemap.tmx'),
    name: 'Forest',
    events: [
        VillagerEvent,
        VillagerEvent2
    ]
})
export class SampleMap extends RpgMap {}