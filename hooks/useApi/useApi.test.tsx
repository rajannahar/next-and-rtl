import { renderHook } from "@testing-library/react-hooks";
import { useApi } from "./useApi";

describe("useApi hook", () => {
  it("should return default value", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useApi({ apiEndpoint: "/api/users" })
    );

    await waitForNextUpdate();

    expect(result.current).toEqual([
      {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        address: {
          street: "Skiles Walks",
          suite: "Suite 351",
          city: "Roscoeview",
          zipcode: "33263",
          geo: { lat: "24.8918", lng: "21.8984" },
        },
        phone: "(254)954-1289",
        website: "demarco.info",
        company: {
          name: "Keebler LLC",
          catchPhrase: "User-centric fault-tolerant solution",
          bs: "revolutionize end-to-end systems",
        },
      },
    ]);
  });
});
