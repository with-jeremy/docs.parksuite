"use client";
// pages/attributes.tsx
import { useEffect } from 'react';
import Image from 'next/image';

const AttributesPage = () => {
  useEffect(() => {
    // Client-side script - cannot be run during server render
    const addAttribute = (categoryId: string) => {
      const attributeList = document.getElementById(categoryId);
      if (!attributeList) return;

      const newLi = document.createElement("li");
      newLi.className = "flex items-center space-x-2";
      newLi.innerHTML = `<input type="text" name="${categoryId.replace('-attributes', '_attributes[]')}" class="flex-1 p-2 border border-gray-300 rounded" value=""><button type="button" class="remove-attribute text-red-500 hover:text-red-700">X</button>`;

      attributeList.appendChild(newLi);

      // Add event listener after the element is created
      newLi.querySelector('.remove-attribute')?.addEventListener('click', (event: Event) => {
        removeAttribute(event.target as HTMLElement);
      });
    };

    const removeAttribute = (button: HTMLElement) => {
      const li = button.closest('li');
      li?.parentNode?.removeChild(li);
    };

    // Attach event listeners to dynamically created elements.  Better than onclick= in string above.
    const addAttributeButtons = document.querySelectorAll<HTMLButtonElement>('.add-attribute-button');
    addAttributeButtons.forEach(button => {
      button.addEventListener('click', () => {
        addAttribute(button.dataset.categoryId || '');
      });
    });

    // Attach event listeners to existing remove buttons (important to find them *after* component mounts)
    const removeAttributeButtons = document.querySelectorAll<HTMLButtonElement>('.remove-attribute');
    removeAttributeButtons.forEach(button => {
      button.addEventListener('click', (event: Event) => {
        removeAttribute(event.target as HTMLElement);
      });
    });

    // Cleanup function to remove event listeners when the component unmounts
    return () => {
      addAttributeButtons.forEach(button => {
        button.removeEventListener('click', () => {
          addAttribute(button.dataset.categoryId || '');
        });
      });

      removeAttributeButtons.forEach(button => {
        button.removeEventListener('click', (event: Event) => {
          removeAttribute(event.target as HTMLElement);
        });
      });
    };
  }, []);  // Empty dependency array ensures this runs only once after the initial render

  return (
 
      <div className="container mx-auto py-12 px-4">
        <section className="mb-12">
          <h1 className="text-2xl font-bold mb-4">Adapting AirBNB&apos;s data schema for Parking Space Rentals</h1>
          <p className="text-gray-700 leading-relaxed">
            I started with a clone of Airbnb&apos;s data schema to create our app for booking parking spaces. This approach allowed me to focus on the unique aspects of parking while benefiting from established design patterns and database principles.
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
            Here&apos;s a summary of the key changes to the <code>property</code> table, now renamed to <code>listing</code>:
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
                  <td className="px-6 py-4 text-gray-700 leading-relaxed">Indicates the size of vehicle that the spot can accommodate (e.g., &quot;Compact&quot;, &quot;Standard&quot;, &quot;Oversized&quot;).</td>
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
                  <td className="px-6 py-4 text-gray-700 leading-relaxed">Provide specific instructions for accessing the parking space (e.g., &quot;Enter through the gate on Elm Street&quot;, &quot;Spot #3 on the left&quot;).</td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed">(None)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap"><em>N/A</em></td>
                  <td className="px-6 py-4 whitespace-nowrap"><code>is_event_parking</code></td>
                  <td className="px-6 py-4 whitespace-nowrap"><code>BOOLEAN</code></td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed">Indicates if this parking spot is reserved for events, to apply dynamic pricing and proximity filters.</td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed">What are your thoughts on &quot;Event Parking&quot; specifically as opposed to default parking status?</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
            <h2 className="section-title text-gray-800">Attribute Usage Examples</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
                These screenshots demonstrate how the attributes will be used in the app&apos;s user interface:
            </p>

            <div className="flex flex-col items-center">
              <h3 className="section-subtitle text-gray-800">Listing Details</h3>
              <Image src="/images/list.png" alt="Filters Screenshot" className="img-demo" width={500} height={300} />

              <h3 className="section-subtitle text-gray-800">Filters</h3>
              <Image src="/images/find.png" alt="Listing Details Screenshot" className="img-demo" width={500} height={300} />
            </div>
        </section>
  

        <section className="mb-12">
          <h2 className="section-title text-gray-800">Defining Parking Space Attributes</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Here is where I need your input to define the attributes that will make our parking space listings stand out. These attributes will allow renters to filter and find the perfect spot for their needs.
          </p>

          <form name="edit-attributes" method="POST" data-netlify="true" className="space-y-6">
            <input type="hidden" name="form-name" value="edit-attributes" />

            {/* Category: Space Features */}
            <div className="mb-6 card p-4 rounded-lg bg-white shadow-md">
              <h3 className="section-subtitle text-gray-800 font-semibold mb-2">Space Features</h3>
              <ul className="attribute-list space-y-2" id="space-features-attributes">
                <li className="flex items-center space-x-2">
                  <input type="text" name="space_features_attributes[]" defaultValue="Compact Size" className="flex-1 p-2 border border-gray-300 rounded" />
                  <button type="button" className="remove-attribute text-red-500 hover:text-red-700">X</button>
                </li>
                <li className="flex items-center space-x-2">
                  <input type="text" name="space_features_attributes[]" defaultValue="Oversized Vehicle Allowed" className="flex-1 p-2 border border-gray-300 rounded" />
                  <button type="button" className="remove-attribute text-red-500 hover:text-red-700">X</button>
                </li>
                <li className="flex items-center space-x-2">
                  <input type="text" name="space_features_attributes[]" defaultValue="Electric Vehicle Charging" className="flex-1 p-2 border border-gray-300 rounded" />
                  <button type="button" className="remove-attribute text-red-500 hover:text-red-700">X</button>
                </li>
                <li className="flex items-center space-x-2">
                  <input type="text" name="space_features_attributes[]" defaultValue="Covered" className="flex-1 p-2 border border-gray-300 rounded" />
                  <button type="button" className="remove-attribute text-red-500 hover:text-red-700">X</button>
                </li>
              </ul>
              <button
                type="button"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline add-attribute-button mt-4"
                data-category-id="space-features-attributes"
              >
                Add Attribute
              </button>
            </div>

            {/* Category: Security */}
            <div className="mb-6 card p-4 rounded-lg bg-white shadow-md">
              <h3 className="section-subtitle text-gray-800 font-semibold mb-2">Security</h3>
              <ul className="attribute-list space-y-2" id="security-attributes">
                <li className="flex items-center space-x-2">
                  <input type="text" name="security_attributes[]" defaultValue="Security Cameras" className="flex-1 p-2 border border-gray-300 rounded" />
                  <button type="button" className="remove-attribute text-red-500 hover:text-red-700">X</button>
                </li>
                <li className="flex items-center space-x-2">
                  <input type="text" name="security_attributes[]" defaultValue="Gated Access" className="flex-1 p-2 border border-gray-300 rounded" />
                  <button type="button" className="remove-attribute text-red-500 hover:text-red-700">X</button>
                </li>
                <li className="flex items-center space-x-2">
                  <input type="text" name="security_attributes[]" defaultValue="On-Site Attendant" className="flex-1 p-2 border border-gray-300 rounded" />
                  <button type="button" className="remove-attribute text-red-500 hover:text-red-700">X</button>
                </li>
                <li className="flex items-center space-x-2">
                  <input type="text" name="security_attributes[]" defaultValue="Well-Lit" className="flex-1 p-2 border border-gray-300 rounded" />
                  <button type="button" className="remove-attribute text-red-500 hover:text-red-700">X</button>
                </li>
              </ul>
              <button
                type="button"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline add-attribute-button mt-4"
                data-category-id="security-attributes"
              >
                Add Attribute
              </button>
            </div>

            {/* Category: Accessibility */}
            <div className="mb-6 card p-4 rounded-lg bg-white shadow-md">
              <h3 className="section-subtitle text-gray-800 font-semibold mb-2">Accessibility</h3>
              <ul className="attribute-list space-y-2" id="accessibility-attributes">
                <li className="flex items-center space-x-2">
                  <input type="text" name="accessibility_attributes[]" defaultValue="Handicap Accessible" className="flex-1 p-2 border border-gray-300 rounded" />
                  <button type="button" className="remove-attribute text-red-500 hover:text-red-700">X</button>
                </li>
                <li className="flex items-center space-x-2">
                  <input type="text" name="accessibility_attributes[]" defaultValue="Paved" className="flex-1 p-2 border border-gray-300 rounded" />
                  <button type="button" className="remove-attribute text-red-500 hover:text-red-700">X</button>
                </li>
                <li className="flex items-center space-x-2">
                  <input type="text" name="accessibility_attributes[]" defaultValue="Level Surface" className="flex-1 p-2 border border-gray-300 rounded" />
                  <button type="button" className="remove-attribute text-red-500 hover:text-red-700">X</button>
                </li>
                <li className="flex items-center space-x-2">
                  <input type="text" name="accessibility_attributes[]" defaultValue="Easy Turnaround" className="flex-1 p-2 border border-gray-300 rounded" />
                  <button type="button" className="remove-attribute text-red-500 hover:text-red-700">X</button>
                </li>
              </ul>
              <button
                type="button"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline add-attribute-button mt-4"
                data-category-id="accessibility-attributes"
              >
                Add Attribute
              </button>
            </div>

            {/* Category: Location */}
            <div className="mb-6 card p-4 rounded-lg bg-white shadow-md">
              <h3 className="section-subtitle text-gray-800 font-semibold mb-2">Location</h3>
              <ul className="attribute-list space-y-2" id="location-attributes">
                <li className="flex items-center space-x-2">
                  <input type="text" name="location_attributes[]" defaultValue="Near Stadium Entrance" className="flex-1 p-2 border border-gray-300 rounded" />
                  <button type="button" className="remove-attribute text-red-500 hover:text-red-700">X</button>
                </li>
                <li className="flex items-center space-x-2">
                  <input type="text" name="location_attributes[]" defaultValue="Downtown Core" className="flex-1 p-2 border border-gray-300 rounded" />
                  <button type="button" className="remove-attribute text-red-500 hover:text-red-700">X</button>
                </li>
                <li className="flex items-center space-x-2">
                  <input type="text" name="location_attributes[]" defaultValue="Close to Public Transport" className="flex-1 p-2 border border-gray-300 rounded" />
                  <button type="button" className="remove-attribute text-red-500 hover:text-red-700">X</button>
                </li>
                <li className="flex items-center space-x-2">
                  <input type="text" name="location_attributes[]" defaultValue="Residential Area" className="flex-1 p-2 border border-gray-300 rounded" />
                  <button type="button" className="remove-attribute text-red-500 hover:text-red-700">X</button>
                </li>
              </ul>
              <button
                type="button"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline add-attribute-button mt-4"
                data-category-id="location-attributes"
              >
                Add Attribute
              </button>
            </div>

            {/* Category: Game Day */}
            <div className="mb-6 card p-4 rounded-lg bg-white shadow-md">
              <h3 className="section-subtitle text-gray-800 font-semibold mb-2">Game Day</h3>
              <ul className="attribute-list space-y-2" id="game-day-attributes">
                <li className="flex items-center space-x-2">
                  <input type="text" name="game_day_attributes[]" defaultValue="Walkable Distance to Stadium" className="flex-1 p-2 border border-gray-300 rounded" />
                  <button type="button" className="remove-attribute text-red-500 hover:text-red-700">X</button>
                </li>
                <li className="flex items-center space-x-2">
                  <input type="text" name="game_day_attributes[]" defaultValue="Tailgating Allowed" className="flex-1 p-2 border border-gray-300 rounded" />
                  <button type="button" className="remove-attribute text-red-500 hover:text-red-700">X</button>
                </li>
                <li className="flex items-center space-x-2">
                  <input type="text" name="game_day_attributes[]" defaultValue="Family Friendly" className="flex-1 p-2 border border-gray-300 rounded" />
                  <button type="button" className="remove-attribute text-red-500 hover:text-red-700">X</button>
                </li>
              </ul>
              <button
                type="button"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline add-attribute-button mt-4"
                data-category-id="game-day-attributes"
              >
                Add Attribute
              </button>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Submit Changes
              </button>
            </div>
          </form>
        </section>
      </div>
  );
};

export default AttributesPage;