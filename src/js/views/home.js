import React from "react";
import "../../styles/home.css";

export const Home = () => (
	<>
		<section className = "contact-search p-3">
			<div className = "container">
				<div className = "grid">
					<div className = "row">
						<div className = "col">
							<p className = "h3"> Contact Manager
							</p>
						</div>
						<div className = "row">
							<div className = "col-md-6">
								<form>
									<div className = "col">
										<div className = "mb-2">
											<input type = "submit" className="btn btn-outline-dak" value="Search"/>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</>
);
