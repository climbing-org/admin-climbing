/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
    id: string;
}

declare const $: any;

declare const google: {
    maps: {
        event: any;
        places: {
            AutocompleteService: any;
            PlacesServiceStatus: any;
        }
        LatLngBounds: any;
        LatLng: any;
    }
};
