// pages/data-definition.js
import Head from 'next/head';

const DataDefinitionPage = () => {
  return (
    <div>
      <Head>
        <title>Parking App: Data Definition</title>
      </Head>
      <div className="container mx-auto py-12 px-4">
      <section>
            <h1 class="section-title text-gray-800">Data Definition</h1>
            <p class="text-gray-700 leading-relaxed mb-8">
                This page provides a detailed description of the database schema used in the parking app project.  Each table and its columns are explained below.
            </p>

            <!-- Listing Table -->
            <h2 class="text-xl font-bold mb-2 text-gray-800">listing</h2>
            <p class="text-gray-700 mb-4">A record for a parking space that can be booked on the website.</p>
            <table class="data-table">
                <thead>
                    <tr class="table-header">
                        <th>Column</th>
                        <th>Description</th>
                        <th>Data Type</th>
                        <th>Sample Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>id</td>
                        <td>Primary key. A unique identifier for the row.</td>
                        <td>INT</td>
                        <td>1, 2, 3</td>
                    </tr>
                    <tr>
                        <td>location_id</td>
                        <td>A foreign key to the location table to indicate the location for the parking space.</td>
                        <td>INT</td>
                        <td>2, 5, 7</td>
                    </tr>
                    <tr>
                        <td>place_type_id</td>
                        <td>A foreign key to the place_type table to indicate the type of parking space (e.g., "Driveway").</td>
                        <td>INT</td>
                        <td>1, 2, 4</td>
                    </tr>
                    <tr>
                        <td>property_type_id</td>
                        <td>A foreign key to the property_type table to indicate the type of property (e.g., "Covered").</td>
                        <td>INT</td>
                        <td>3, 4, 5</td>
                    </tr>
                    <tr>
                        <td>host_id</td>
                        <td>A foreign key to the user_account table indicating the owner of the parking space.</td>
                        <td>INT</td>
                        <td>1, 3, 8</td>
                    </tr>
                    <tr>
                        <td>hourly_price</td>
                        <td>The price per hour for renting the parking space.</td>
                        <td>INT</td>
                        <td>10, 15, 20</td>
                    </tr>
                    <tr>
                        <td>event_price</td>
                        <td>The price for renting the parking space during a specific event.</td>
                        <td>INT</td>
                        <td>25, 30, 40</td>
                    </tr>
                    <tr>
                        <td>property_name</td>
                        <td>A descriptive name for the parking space (e.g., "Stadium Parking - Lot A").</td>
                        <td>VARCHAR(200)</td>
                        <td>"Stadium Parking - Lot A", "Covered Spot Downtown"</td>
                    </tr>
                    <tr>
                        <td>is_favourite</td>
                        <td>A flag indicating whether the listing is a favourite for a user</td>
                        <td>INT</td>
                        <td>0, 1</td>
                    </tr>
                    <tr>
                        <td>description</td>
                        <td>Detailed description of the parking space.</td>
                        <td>VARCHAR(2000)</td>
                        <td>"Secure, covered parking space close to the stadium entrance."</td>
                    </tr>
                    <tr>
                        <td>address_line_1</td>
                        <td>The first line of the parking space's address.</td>
                        <td>VARCHAR(500)</td>
                        <td>"123 Main Street"</td>
                    </tr>
                    <tr>
                        <td>address_line_2</td>
                        <td>The second line of the parking space's address (optional).</td>
                        <td>VARCHAR(500)</td>
                        <td>"Apt 4B"</td>
                    </tr>
                    <tr>
                        <td>size</td>
                        <td>The size of vehicle that the spot can accommodate (e.g., "Compact", "Standard", "Oversized").</td>
                        <td>VARCHAR(50)</td>
                        <td>"Compact", "Standard", "Oversized"</td>
                    </tr>
                    <tr>
                        <td>max_vehicle_height</td>
                        <td>If the parking space is covered, the maximum height of the vehicle that can fit (in meters).</td>
                        <td>DECIMAL(3,2)</td>
                        <td>2.00, 2.20, 2.50</td>
                    </tr>
                    <tr>
                        <td>license_plate</td>
                        <td>(Optional) The license plate of the vehicle using the parking space.</td>
                        <td>VARCHAR(20)</td>
                        <td>"ABC-123"</td>
                    </tr>
                    <tr>
                        <td>instructions</td>
                        <td>Specific instructions for accessing the parking space.</td>
                        <td>VARCHAR(1000)</td>
                        <td>"Enter through the gate on Elm Street, Spot #3 on the left."</td>
                    </tr>
                    <tr>
                        <td>is_event_parking</td>
                        <td>A flag indicating whether the parking space is reserved for events.</td>
                        <td>BOOLEAN</td>
                        <td>TRUE, FALSE</td>
                    </tr>
                </tbody>
            </table>

            <!-- User Account Table -->
            <h2 class="text-xl font-bold mb-2 text-gray-800">user_account</h2>
            <p class="text-gray-700 mb-4">A record for a user.</p>
            <table class="data-table">
                <thead>
                    <tr class="table-header">
                        <th>Column</th>
                        <th>Description</th>
                        <th>Data Type</th>
                        <th>Sample Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>id</td>
                        <td>Primary key, unique ID for user</td>
                        <td>INT</td>
                        <td>1, 2, 3</td>
                    </tr>
                    <tr>
                        <td>first_name</td>
                        <td>First name of user</td>
                        <td>VARCHAR(300)</td>
                        <td>"John"</td>
                    </tr>
                    <tr>
                        <td>last_name</td>
                        <td>Last name of user</td>
                        <td>VARCHAR(300)</td>
                        <td>"Doe"</td>
                    </tr>
                     <tr>
                        <td>email_address</td>
                        <td>Email address of user</td>
                        <td>VARCHAR(350)</td>
                        <td>"john.doe@example.com"</td>
                    </tr>
                     <tr>
                        <td>password</td>
                        <td>Hashed password for the user</td>
                        <td>VARCHAR(200)</td>
                        <td>"hashed_password"</td>
                    </tr>
                     <tr>
                        <td>joined_date</td>
                        <td>Date user joined the platform</td>
                        <td>DATE</td>
                        <td>"2024-01-01"</td>
                    </tr>
                     <tr>
                        <td>date_host_started</td>
                        <td>Date user started being a host</td>
                        <td>DATE</td>
                        <td>"2024-02-15"</td>
                    </tr>
                </tbody>
            </table>

             <!-- location Table -->
            <h2 class="text-xl font-bold mb-2 text-gray-800">location</h2>
            <p class="text-gray-700 mb-4">Stores location data.</p>
            <table class="data-table">
                <thead>
                    <tr class="table-header">
                        <th>Column</th>
                        <th>Description</th>
                        <th>Data Type</th>
                        <th>Sample Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>id</td>
                        <td>Primary key, unique ID for location</td>
                        <td>INT</td>
                        <td>1, 2, 3</td>
                    </tr>
                    <tr>
                        <td>country_id</td>
                        <td>Foreign key to country, identifies country</td>
                        <td>INT</td>
                        <td>1, 2, 3</td>
                    </tr>
                    <tr>
                        <td>location_name</td>
                        <td>Name of location</td>
                        <td>VARCHAR(200)</td>
                        <td>"New York", "Paris"</td>
                    </tr>
                </tbody>
            </table>

            <!-- place_type Table -->
            <h2 class="text-xl font-bold mb-2 text-gray-800">place_type</h2>
            <p class="text-gray-700 mb-4">Type of place.</p>
            <table class="data-table">
                <thead>
                    <tr class="table-header">
                        <th>Column</th>
                        <th>Description</th>
                        <th>Data Type</th>
                        <th>Sample Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>id</td>
                        <td>Primary key, unique ID</td>
                        <td>INT</td>
                        <td>1, 2, 3</td>
                    </tr>
                    <tr>
                        <td>type_name</td>
                        <td>Type of place</td>
                        <td>VARCHAR(200)</td>
                        <td>"Driveway", "Lot"</td>
                    </tr>
                </tbody>
            </table>

            <!-- property_type Table -->
            <h2 class="text-xl font-bold mb-2 text-gray-800">property_type</h2>
            <p class="text-gray-700 mb-4">The kind of property.</p>
            <table class="data-table">
                <thead>
                    <tr class="table-header">
                        <th>Column</th>
                        <th>Description</th>
                        <th>Data Type</th>
                        <th>Sample Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>id</td>
                        <td>Primary key, unique ID</td>
                        <td>INT</td>
                        <td>1, 2, 3</td>
                    </tr>
                    <tr>
                        <td>type_name</td>
                        <td>Kind of property</td>
                        <td>VARCHAR(200)</td>
                        <td>"Covered", "Uncovered"</td>
                    </tr>
                </tbody>
            </table>

            <!-- attribute Table -->
            <h2 class="text-xl font-bold mb-2 text-gray-800">attribute</h2>
            <p class="text-gray-700 mb-4">Attributes to be assigned.</p>
            <table class="data-table">
                <thead>
                    <tr class="table-header">
                        <th>Column</th>
                        <th>Description</th>
                        <th>Data Type</th>
                        <th>Sample Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>id</td>
                        <td>Primary key, unique ID</td>
                        <td>INT</td>
                        <td>1, 2, 3</td>
                    </tr>
                    <tr>
                        <td>category_id</td>
                        <td>Foreign key to attribute_category</td>
                        <td>INT</td>
                        <td>1, 2, 3</td>
                    </tr>
                    <tr>
                        <td>attribute_name</td>
                        <td>The name of the attribute</td>
                        <td>VARCHAR(200)</td>
                        <td>"Security Cameras"</td>
                    </tr>
                     <tr>
                        <td>description</td>
                        <td>A longer description for the users</td>
                        <td>VARCHAR(500)</td>
                        <td>"Parking has security cameras"</td>
                    </tr>
                </tbody>
            </table>

            <!-- attribute_category Table -->
            <h2 class="text-xl font-bold mb-2 text-gray-800">attribute_category</h2>
            <p class="text-gray-700 mb-4">Type of attribute.</p>
            <table class="data-table">
                <thead>
                    <tr class="table-header">
                        <th>Column</th>
                        <th>Description</th>
                        <th>Data Type</th>
                        <th>Sample Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>id</td>
                        <td>Primary key, unique ID</td>
                        <td>INT</td>
                        <td>1, 2, 3</td>
                    </tr>
                    <tr>
                        <td>category_name</td>
                        <td>Short name for the attribute group</td>
                        <td>VARCHAR(200)</td>
                        <td>"Space Features"</td>
                    </tr>
                </tbody>
            </table>

            <!-- booking Table -->
            <h2 class="text-xl font-bold mb-2 text-gray-800">booking</h2>
            <p class="text-gray-700 mb-4">A booking that a user makes with a listing..</p>
            <table class="data-table">
                <thead>
                    <tr class="table-header">
                        <th>Column</th>
                        <th>Description</th>
                        <th>Data Type</th>
                        <th>Sample Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>id</td>
                        <td>Primary key, unique ID</td>
                        <td>INT</td>
                        <td>1, 2, 3</td>
                    </tr>
                    <tr>
                        <td>property_id</td>
                        <td>Foreign key to property table, the listed property</td>
                        <td>INT</td>
                        <td>1, 2, 3</td>
                    </tr>
                    <tr>
                        <td>user_id</td>
                        <td>Foreign key to user table, the user that made the booking</td>
                        <td>INT</td>
                        <td>1, 2, 3</td>
                    </tr>
                    <tr>
                        <td>booking_status_id</td>
                        <td>Foreign key to booking_status</td>
                        <td>INT</td>
                        <td>1, 2, 3</td>
                    </tr>
                    <tr>
                        <td>checkin_date</td>
                        <td>Checkin data</td>
                        <td>DATE</td>
                        <td>2024-01-01</td>
                    </tr>
                    <tr>
                        <td>checkout_date</td>
                        <td>Checkout date</td>
                        <td>DATE</td>
                        <td>2024-01-02</td>
                    </tr>
                    <tr>
                        <td>nightly_price</td>
                        <td>Price per night</td>
                        <td>INT</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>service_fee</td>
                        <td>A fee for the services</td>
                        <td>INT</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>total_price</td>
                        <td>total amount the booking cost</td>
                        <td>INT</td>
                        <td>20</td>
                    </tr>
                </tbody>
            </table>

            <!-- booking_status Table -->
            <h2 class="text-xl font-bold mb-2 text-gray-800">booking_status</h2>
            <p class="text-gray-700 mb-4">Status for the current booking.</p>
            <table class="data-table">
                <thead>
                    <tr class="table-header">
                        <th>Column</th>
                        <th>Description</th>
                        <th>Data Type</th>
                        <th>Sample Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>id</td>
                        <td>Primary key, unique ID</td>
                        <td>INT</td>
                        <td>1, 2, 3</td>
                    </tr>
                    <tr>
                        <td>status_name</td>
                        <td>short name for the booking's status</td>
                        <td>VARCHAR</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

        </section>
      </div>
    </div>
  );
};

export default DataDefinitionPage;