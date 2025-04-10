export default function Footer() {
    return (
      <footer className="py-4 mt-10 bg-gray-200 dark:bg-gray-800">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Quentin Guillaume. All Rights Reserved.</p>
          <p>Follow me on <a href="#" className="text-blue-500">LinkedIn</a> and <a href="#" className="text-blue-500">GitHub</a>.</p>
        </div>
      </footer>
    );
  }