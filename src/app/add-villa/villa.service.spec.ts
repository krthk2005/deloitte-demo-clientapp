import { TestBed } from "@angular/core/testing";

import { VillaService } from "./add-villa.service";

describe("VillaService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: VillaService = TestBed.get(VillaService);
    expect(service).toBeTruthy();
  });
});
