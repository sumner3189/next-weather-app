import LocationSearchBar from "../../components/LocationSearchBar";
import Link from "next/link";
import data from "../lib/city.list.json"






export default function City() {
  return (
    <>
      <div className="container mt-5">
        <div className="d-flex justify-content-center">
          <p className="w-50">
            <Link href={"/"}>&larr; Home</Link>
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <LocationSearchBar className="text-center" />
        </div>
      </div>
    </>
  );
}

