// pages/attributes.js
import Head from 'next/head';

const AttributesPage = () => {
  return (
    <div>
      <Head>
        <title>Parking App: Edit Attributes</title>
      </Head>
      <div className="container mx-auto py-12 px-4">
        <section className="mb-12">
          <h1 className="text-2xl font-bold mb-4">Adapting AirBNB's data schema for Parking Space Rentals</h1>
          <p className="text-gray-700 leading-relaxed">
            I started with a clone of Airbnb's data schema to create our app for booking parking spaces. This approach allowed me to focus on the unique aspects of parking while benefiting from established design patterns and database principles.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            This will benefit our app users by providing them a similar listing, with similar attributes to AirBNB, that can be understood in similar ways. But I need your help with some of the details.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">Key Similarities</h2>
          <p className="text-gray-700 leading-relaxed">
            The core concepts remain consistent:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li><strong>Users:</strong> Hosts (property owners) and Renters (parking space users).</li>
            <li><strong>Listings:</strong> Represent available parking spaces with associated details.</li>
            <li><strong>Bookings:</strong> Facilitate the reservation and payment process.</li>
            <li><strong>Reviews:</strong> Allow users to provide feedback and build trust.</li>
            <li><strong>Location Services:</strong> Allow users to find parking, and hosts to list parking.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">Data Adaptations for Parking</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Here's a summary of the key changes to the <code>property</code> table, now renamed to <code>listing</code>:
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 rounded-lg shadow-md">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Original Field (Airbnb)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">New Field (Parking)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rationale for Change</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thoughts to Consider</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap"><code>nightly_price</code></td>
                  <td className="px-6 py-4 whitespace-nowrap"><code>hourly_price</code></td>
                  <td className="px-6 py-4 whitespace-nowrap"><code>INT</code></td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed">Parking is typically rented by the hour, not by the night.</td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed">Confirm hourly pricing is suitable; explore options for daily or event-based rates.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap"><code>num_guests</code></td>
                  <td className="px-6 py-4 whitespace-nowrap"><em>REMOVED</em></td>
                  <td className="px-6 py-4 whitespace-nowrap"></td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed">Irrelevant for parking spaces.</td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed">(None)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap"><code>num_beds</code></td>
                  <td className="px-6 py-4 whitespace-nowrap"><em>REMOVED</em></td>
                  <td className="px-6 py-4 whitespace-nowrap"></td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed">Irrelevant for parking spaces.</td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed">(None)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap"><code>num_bedrooms</code></td>
                  <td className="px-6 py-4 whitespace-nowrap"><em>REMOVED</em></td>
                  <td className="px-6 py-4 whitespace-nowrap"></td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed">Irrelevant for parking spaces.</td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed">(None)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap"><code>num_bathrooms</code></td>
                  <td className="px-6 py-4 whitespace-nowrap"><em>REMOVED</em></td>
                  <td className="px-6 py-4 whitespace-nowrap"></td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed">Irrelevant for parking spaces.</td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed">(None)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap"><code>is_guest_favourite</code></td>
                  <td className="px-6 py-4 whitespace-nowrap"><code>is_favourite</code></td>
                  <td className="px-6 py-4 whitespace-nowrap"><code>INT</code></td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed">Renamed for clarity and broader applicability.</td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed">(None)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap"><em>N/A</em></td>
                  <td className="px-6 py-4 whitespace-nowrap"><code>size</code></td>
                  <td className="px-6 py-4 whitespace-nowrap"><code>VARCHAR</code></td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed">Indicates the size of vehicle that the spot can accommodate (e.g., "Compact", "Standard", "Oversized").</td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed">(None)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap"><em>N/A</em></td>
                  <td className="px-6 py-4 whitespace-nowrap"><code>max_vehicle_height</code></td>
                  <td className="px-6 py-4 whitespace-nowrap"><code>DECIMAL</code></td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed">If the parking space is covered, the maximum height of the vehicle that can fit.</td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed">(None)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap"><em>N/A</em></td>
                  <td className="px-6 py-4 whitespace-nowrap"><code>license_plate</code></td>
                  <td className="px-6 py-4 whitespace-nowrap"><code>VARCHAR</code></td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed">(Optional) Allows the host to record the license plate of the vehicle using the parking space (for verification).</td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed">Do you have security concerns about the host asking for the license plate ID of a parkint tenant?</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap"><em>N/A</em></td>
                  <td className="px-6 py-4 whitespace-nowrap"><code>instructions</code></td>
                  <td className="px-6 py-4 whitespace-nowrap"><code>VARCHAR</code></td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed">Provide specific instructions for accessing the parking space (e.g., "Enter through the gate on Elm Street", "Spot #3 on the left").</td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed">(None)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap"><em>N/A</em></td>
                  <td className="px-6 py-4 whitespace-nowrap"><code>is_event_parking</code></td>
                  <td className="px-6 py-4 whitespace-nowrap"><code>BOOLEAN</code></td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed">Indicates if this parking spot is reserved for events, to apply dynamic pricing and proximity filters.</td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed">What are your thoughts on "Event Parking" specifically as opposed to default parking status?</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
            <h2 className="section-title text-gray-800">Defining Parking Space Attributes</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
                Here is where I need your input to define the attributes that will make our parking space listings stand out. These attributes will allow renters to filter and find the perfect spot for their needs.
            </p>

            <form name="edit-attributes" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="edit-attributes" />

                {/* Category: Space Features */}
                <div className="mb-6 card p-4 rounded-lg">
                    <h3 className="section-subtitle text-gray-800">Space Features</h3>
                    <ul className="attribute-list" id="space-features-attributes">
                        <li>
                            <input type="text" name="space_features_attributes[]" value="Compact Size" />
                            <button type="button" className="remove-attribute" onClick={() => removeAttribute(this)}>
                                <i className="fas fa-times"></i>
                            </button>
                        </li>
                        <li>
                            <input type="text" name="space_features_attributes[]" value="Oversized Vehicle Allowed" />
                            <button type="button" className="remove-attribute" onClick={() => removeAttribute(this)}>
                                <i className="fas fa-times"></i>
                            </button>
                        </li>
                        <li>
                            <input type="text" name="space_features_attributes[]" value="Electric Vehicle Charging" />
                            <button type="button" className="remove-attribute" onClick={() => removeAttribute(this)}>
                                <i className="fas fa-times"></i>
                            </button>
                        </li>
                        <li>
                            <input type="text" name="space_features_attributes[]" value="Covered" />
                            <button type="button" className="remove-attribute" onClick={() => removeAttribute(this)}>
                                <i className="fas fa-times"></i>
                            </button>
                        </li>
                    </ul>
                    <button type="button" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => addAttribute('space-features-attributes')}>Add Attribute</button>
                </div>

                {/* Category: Security */}
                <div className="mb-6 card p-4 rounded-lg">
                    <h3 className="section-subtitle text-gray-800">Security</h3>
                    <ul className="attribute-list" id="security-attributes">
                        <li>
                            <input type="text" name="security_attributes[]" value="Security Cameras" />
                            <button type="button" className="remove-attribute" onClick={() => removeAttribute(this)}>
                                <i className="fas fa-times"></i>
                            </button>
                        </li>
                        <li>
                            <input type="text" name="security_attributes[]" value="Gated Access" />
                            <button type="button" className="remove-attribute" onClick={() => removeAttribute(this)}>
                                <i className="fas fa-times"></i>
                            </button>
                        </li>
                        <li>
                            <input type="text" name="security_attributes[]" value="On-Site Attendant" />
                            <button type="button" className="remove-attribute" onClick={() => removeAttribute(this)}>
                                <i className="fas fa-times"></i>
                            </button>
                        </li>
                        <li>
                            <input type="text" name="security_attributes[]" value="Well-Lit" />
                            <button type="button" className="remove-attribute" onClick={() => removeAttribute(this)}>
                                <i className="fas fa-times"></i>
                            </button>
                        </li>
                    </ul>
                    <button type="button" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => addAttribute('security-attributes')}>Add Attribute</button>
                </div>

                {/* Category: Accessibility */}
                <div className="mb-6 card p-4 rounded-lg">
                    <h3 className="section-subtitle text-gray-800">Accessibility</h3>
                    <ul className="attribute-list" id="accessibility-attributes">
                        <li>
                            <input type="text" name="accessibility_attributes[]" value="Handicap Accessible" />
                            <button type="button" className="remove-attribute" onClick={() => removeAttribute(this)}>
                                <i className="fas fa-times"></i>
                            </button>
                        </li>
                        <li>
                            <input type="text" name="accessibility_attributes[]" value="Paved" />
                            <button type="button" className="remove-attribute" onClick={() => removeAttribute(this)}>
                                <i className="fas fa-times"></i>
                            </button>
                        </li>
                        <li>
                            <input type="text" name="accessibility_attributes[]" value="Level Surface" />
                            <button type="button" className="remove-attribute" onClick={() => removeAttribute(this)}>
                                <i className="fas fa-times"></i>
                            </button>
                        </li>
                        <li>
                            <input type="text" name="accessibility_attributes[]" value="Easy Turnaround" />
                            <button type="button" className="remove-attribute" onClick={() => removeAttribute(this)}>
                                <i className="fas fa-times"></i>
                            </button>
                        </li>
                    </ul>
                    <button type="button" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => addAttribute('accessibility-attributes')}>Add Attribute</button>
                </div>

                {/* Category: Location */}
                <div className="mb-6 card p-4 rounded-lg">
                    <h3 className="section-subtitle text-gray-800">Location</h3>
                    <ul className="attribute-list" id="location-attributes">
                        <li>
                            <input type="text" name="location_attributes[]" value="Near Stadium Entrance" />
                            <button type="button" className="remove-attribute" onClick={() => removeAttribute(this)}>
                                <i className="fas fa-times"></i>
                            </button>
                        </li>
                        <li>
                            <input type="text" name="location_attributes[]" value="Downtown Core" />
                            <button type="button" className="remove-attribute" onClick={() => removeAttribute(this)}>
                                <i className="fas fa-times"></i>
                            </button>
                        </li>
                        <li>
                            <input type="text" name="location_attributes[]" value="Close to Public Transport" />
                            <button type="button" className="remove-attribute" onClick={() => removeAttribute(this)}>
                                <i className="fas fa-times"></i>
                            </button>
                        </li>
                        <li>
                            <input type="text" name="location_attributes[]" value="Residential Area" />
                            <button type="button" className="remove-attribute" onClick={() => removeAttribute(this)}>
                                <i className="fas fa-times"></i>
                            </button>
                        </li>
                    </ul>
                    <button type="button" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => addAttribute('location-attributes')}>Add Attribute</button>
                </div>

                  {/* Category: Game Day */}
                <div className="mb-6 card p-4 rounded-lg">
                    <h3 className="section-subtitle text-gray-800">Game Day</h3>
                    <ul className="attribute-list" id="game-day-attributes">
                        <li>
                            <input type="text" name="game_day_attributes[]" value="Walkable Distance to Stadium" />
                            <button type="button" className="remove-attribute" onClick={() => removeAttribute(this)}>
                                <i className="fas fa-times"></i>
                            </button>
                        </li>
                        <li>
                            <input type="text" name="game_day_attributes[]" value="Tailgating Allowed" />
                            <button type="button" className="remove-attribute" onClick={() => removeAttribute(this)}>
                                <i className="fas fa-times"></i>
                            </button>
                        </li>
                        <li>
                            <input type="text" name="game_day_attributes[]" value="Family Friendly" />
                            <button type="button" className="remove-attribute" onClick={() => removeAttribute(this)}>
                                <i className="fas fa-times"></i>
                            </button>
                        </li>
                    </ul>
                    <button type="button" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => addAttribute('game-day-attributes')}>Add Attribute</button>
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Submit Changes
                    </button>
                </div>
            </form>
        </section>


        {/* Client Task */}
        <section className="mb-12">
            <h2 className="section-title text-gray-800">Client Input Needed</h2>

        </section>



    </div>

    <script>
        function addAttribute(categoryId) {
            const attributeList = document.getElementById(categoryId);
            const newLi = document.createElement("li");
            newLi.innerHTML = '<input type="text" name="' + categoryId.replace('-attributes', '_attributes[]') + '" value=""><button type="button" class="remove-attribute" onClick="removeAttribute(this)"><i class="fas fa-times"></i></button>';
            attributeList.appendChild(newLi);
        }


        function removeAttribute(button) {
            const li = button.parentNode;
            li.parentNode.removeChild(li);
        }
    </script>

      </div>
    </div>
  );
};

export default AttributesPage;