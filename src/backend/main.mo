import Map "mo:core/Map";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User Profile Type
  public type UserProfile = {
    name : Text;
  };

  // Contact Submission Type
  public type ContactSubmission = {
    name : Text;
    phone : Text;
    email : ?Text;
    vehicle : ?Text;
    service : Text;
    message : Text;
    timestamp : Time.Time;
  };

  // Stable storage for user profiles
  let userProfiles = Map.empty<Principal, UserProfile>();

  // Temporary storage for contact submissions (persistent storage is not required)
  var submissions : [ContactSubmission] = [];

  // User Profile Management Functions

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Contact Form Functions

  // Public endpoint - anyone including anonymous users can submit
  public shared ({ caller }) func submitContactForm(
    name : Text,
    phone : Text,
    email : ?Text,
    vehicle : ?Text,
    service : Text,
    message : Text,
  ) : async () {
    let entry : ContactSubmission = {
      name = name;
      phone = phone;
      email = email;
      vehicle = vehicle;
      service = service;
      message = message;
      timestamp = Time.now();
    };
    submissions := submissions.concat([entry]);
  };

  // Admin-only endpoint to view all contact submissions
  public query ({ caller }) func getAllContacts() : async [ContactSubmission] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view contacts/inquiries");
    };
    submissions;
  };
};
