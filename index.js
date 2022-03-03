// robotics class stufffff bruhh
int Brain_precision = 0;

float Var;

// hat block

int whenStarted1() { 
  var = 0.0;
  return 0;
}
// when pressed
void onevent_Bumper10_pressed_0() {
  if (Var == 0.0) {
    Var = 1.0;
    TouchLED2.serColor(green);
    Drivetrain.driveFor(forward, 200.0, mm);
}
else {
  Var = 0.0;
  TouchLED2.setColor(red);
  Drivetrain.stop();
}

int main() {
  // register event handlers
  Bumper10.pressed(onevent_Bumper10_pressed_0);

  wait(15, msec);
  whenStarted1();
}
