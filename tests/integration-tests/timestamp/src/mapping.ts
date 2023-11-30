import { Trigger } from "../generated/Contract/Contract";
import { Foo } from "../generated/schema";

export function handleTrigger(event: Trigger): void {
  let obj = new Foo("0");
  obj.value = 679736164000;
  obj.save();

  obj = <Foo>Foo.load("0");
  assert(obj.value == 679736164000, "maybe invalid value");
}
