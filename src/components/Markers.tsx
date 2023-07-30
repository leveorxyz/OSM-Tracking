import { useEffect, useState } from "react";
import { Marker } from "react-leaflet/Marker";
import { Icon } from "leaflet";
import { Popup } from "react-leaflet/Popup";
import { getDocs } from "firebase/firestore";

import navigationIcon from "~/assets/navigation.svg";
import { Table, TableBody, TableCell, TableRow } from "~/components/ui/table";
import { locationsCollection } from "~/utils/firestore";

const icon = new Icon({
  iconUrl: navigationIcon,
  iconSize: [36, 36],
});

export interface IData {
  lng: string;
  timestamp: ITimestamp;
  uuid: string;
  lat: string;
}

export interface ITimestamp {
  seconds: number;
  nanoseconds: number;
}

export default function Markers() {
  const [locations, setLocations] = useState<IData[]>([]);

  useEffect(() => {
    getDocs(locationsCollection).then((data) =>
      setLocations(data.docs.map((doc) => doc.data()) as IData[])
    );
  }, []);

  return (
    <>
      {locations.map(({ uuid, lat, lng }) => (
        <Marker
          position={[parseFloat(lat), parseFloat(lng)]}
          key={uuid}
          icon={icon}
        >
          <Popup>
            <h2 className="text-2xl">
              Device ID:&nbsp;
              <span className="font-bold">{uuid}</span>
            </h2>
            <Table className="mt-4">
              <TableBody>
                <TableRow>
                  <TableCell className="p-0 pr-8 last-of-type:pr-0 font-bold text-slate-500 text-sm">
                    Latitude
                  </TableCell>
                  <TableCell className="p-0 pr-8 last-of-type:pr-0 font-bold text-slate-500 text-sm">
                    Longitude
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="p-0 pr-8 last-of-type:pr-0 text-lg">
                    {lat}
                  </TableCell>
                  <TableCell className="p-0 pr-8 last-of-type:pr-0 text-lg">
                    {lng}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Popup>
        </Marker>
      ))}
    </>
  );
}
