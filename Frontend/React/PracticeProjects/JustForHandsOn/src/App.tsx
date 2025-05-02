import { useState } from 'react';
import { initialTravelPlan } from './places.js';

interface Place {
  id: number;
  title: string;
  childIds: number[];
}

interface PlacesById {
  [key: string]: Place;
}

interface PlaceTreeProps {
  id: number;
  placesById: PlacesById;
  setPlan: React.Dispatch<React.SetStateAction<PlacesById>>;
  parentId: number;
}

function PlaceTree({ id, placesById, setPlan, parentId }: PlaceTreeProps) {
  const place = placesById[id];
  const childIds = place.childIds;

  return (
    <li>
      {place.title}{' '}
      <button
        onClick={() => {
          const parentObj = placesById[parentId];
          const newObj: PlacesById = {
            ...placesById,
            [parentId]: {
              ...parentObj,
              childIds: parentObj.childIds.filter((childId) => childId !== place.id),
            },
          };

          deleteFromObject(place.id);
          function deleteFromObject(id: number) {
            const childIds = newObj[id].childIds;
            childIds.forEach(deleteFromObject);
            delete newObj[id];
          }
          setPlan(newObj);
        }}
      >
        complete
      </button>

      <br />
      <br />
      {childIds.length > 0 && (
        <ol>
          {childIds.map((childId) => (
            <PlaceTree
              key={childId}
              id={childId}
              placesById={placesById}
              setPlan={setPlan}
              parentId={id}
            />
          ))}
        </ol>
      )}
    </li>
  );
}

export default function TravelPlan() {
  const [plan, setPlan] = useState<PlacesById>(initialTravelPlan);
  const root = plan[0]; // Assuming the root is the first key in the object

  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {root.childIds.map((childId) => (
          <PlaceTree
            key={childId}
            id={childId}
            placesById={plan}
            setPlan={setPlan}
            parentId={root.id}
          />
        ))}
      </ol>
    </>
  );
}

